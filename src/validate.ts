import { getTokenType } from "./helpers/getTokenType.js";
import { Results, Tokens } from "./types.js";
import { validateBaseToken } from "./validators/baseToken.js";
import { typeValidators } from "./validators/type.js";
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

      const tokenValue = Object.values(token)[0];
      const type = getTokenType(tokenValue, context);
      const { $value } = tokenValue;

      if (type && $value) {
        const typeValidator = typeValidators[type];
        typeValidator(tokenValue.$value, context);
      }
    },
  };

  walk(tokens, visitorFunctions);

  return context.messages;
};
