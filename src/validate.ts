import { Results, Tokens } from "./types.js";
import { validateBaseToken } from "./validators/baseToken.js";
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
    group: () => {},
    token: (token) => {
      validateBaseToken(token, context);
    },
  };

  walk(tokens, visitorFunctions);

  return context.messages;
};
