import { FormattedMessages, formatMessages } from "./helpers/formatMessages.js";
import { getTokenPath } from "./helpers/getTokenPath.js";
import { getTokenType } from "./helpers/getTokenType.js";
import { resolveValue } from "./helpers/resolveValue.js";
import { MessageKey, getMessage } from "./messages.js";
import { Results, Tokens } from "./types.js";
import { validateBaseToken } from "./validators/baseToken.js";
import { TokenValidator, typeValidators } from "./validators/type.js";
import { GroupPath, VisitorFunctions, walk } from "./walk.js";

export interface BaseContext {
  messages: Results;
  tokens: Tokens;
  report: (details: {
    messageId: MessageKey;
    args: Array<string | number>;
  }) => void;
}

export interface Context extends BaseContext {
  groups: GroupPath[];
  tokenPath: string;
}

export const validate = (tokens: Tokens): FormattedMessages => {
  const baseContext: BaseContext = {
    messages: [],
    tokens,
    report(details) {
      const { messageId, args } = details;
      const message = getMessage(messageId, ...args);

      this.messages.push(message);
    },
  };

  const getContext = ({ groups }: { groups: GroupPath[] }): Context => {
    return {
      messages: baseContext.messages,
      tokens: baseContext.tokens,
      report: baseContext.report,
      groups,
      tokenPath: getTokenPath(groups),
    };
  };

  const visitorFunctions: VisitorFunctions = {
    group: () => {
      // Is there any validation we need to do here?
    },
    token: (token, groups) => {
      const context = getContext({ groups });
      validateBaseToken(token, context);

      const tokenValueOrAlias = Object.values(token)[0];

      const tokenValue = resolveValue(tokenValueOrAlias, context);

      if (!tokenValue) {
        return;
      }

      const type = getTokenType(tokenValue, context);

      const { $value } = tokenValue;

      if (type && $value) {
        // I can't get the type inference to work correctly here, hence the any
        const typeValidator = typeValidators[type] as TokenValidator<any>;

        typeValidator($value, context);
      }
    },
    unknown: (_, groups) => {
      const context = getContext({ groups });

      context.report({
        messageId: "unknown-token-type",
        args: [context.tokenPath],
      });
    },
  };

  walk(tokens, visitorFunctions);

  const messages = formatMessages(baseContext.messages);

  return messages;
};
