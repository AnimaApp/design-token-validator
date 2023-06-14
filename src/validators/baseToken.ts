import { Token } from "../types.js";
import { Context } from "../validate.js";

export const validateBaseToken = (token: Token, context: Context) => {
  const name = Object.keys(token)[0];

  if (!name) {
    context.report({
      messageId: "token-does-not-have-name",
      args: [context.tokenPath],
    });
  }

  if (name) {
    if (name.startsWith("$")) {
      context.report({
        messageId: "token-has-invalid-characters",
        args: [context.tokenPath],
      });
    }

    if (name.includes("{") || name.includes("}") || name.includes(".")) {
      context.report({
        messageId: "token-has-invalid-characters",
        args: [context.tokenPath],
      });
    }
  }

  if (!token[name].$value) {
    context.report({
      messageId: "token-does-not-have-value",
      args: [context.tokenPath],
    });
  }
};
