import { getTokenType } from "./helpers/getTokenType.js";
import { resolveValue } from "./helpers/resolveValue.js";
import { Results, Tokens } from "./types.js";
import { validateBaseToken } from "./validators/baseToken.js";
import { TokenValidator, typeValidators } from "./validators/type.js";
import { VisitorFunctions, walk } from "./walk.js";

export interface Context {
  messages: Results;
  tokens: Tokens;
}

export const validate = (tokens: Tokens): Results => {
  const context: Context = {
    messages: [],
    tokens,
  };

  const visitorFunctions: VisitorFunctions = {
    group: () => {
      // TODO: validate group
    },
    token: (token) => {
      validateBaseToken(token, context);

      const tokenValueOrAlias = Object.values(token)[0];

      const tokenValue = resolveValue(tokenValueOrAlias, context);

      if (!tokenValue) {
        return; // TODO handle this scenario
      }

      const type = getTokenType(tokenValue, context);

      const { $value } = tokenValue;

      if (type && $value) {
        // I can't get the type inference to work correctly here, hence the any
        const typeValidator = typeValidators[type] as TokenValidator<any>;

        typeValidator($value, context);
      }
    },
  };

  walk(tokens, visitorFunctions);

  return context.messages;
};
