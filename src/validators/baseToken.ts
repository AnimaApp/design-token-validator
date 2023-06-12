import { Token } from "../types.js";
import { Context } from "../validate.js";

export const validateBaseToken = (token: Token, context: Context) => {
  const results = context.messages;

  const name = Object.keys(token)[0];

  if (!name) {
    results.push({
      message: "Token must have a name",
    });
  }

  if (name) {
    if (typeof name !== "string") {
      results.push({
        message: "Token name must be a string",
      });
    }

    if (name.startsWith("$")) {
      results.push({
        message: "Token name must not start with $",
      });
    }

    // These three only apply if valid is not an alias
    if (name.includes("{")) {
      results.push({
        message: "Token name must not contain {",
      });
    }

    if (name.includes("}")) {
      results.push({
        message: "Token name must not contain }",
      });
    }

    if (name.includes(".")) {
      results.push({
        message: "Token name must not contain .",
      });
    }
  }

  if (!token[name].$value) {
    results.push({
      message: "Token must have a value",
    });
  }
};
