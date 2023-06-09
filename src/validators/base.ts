import { Results, Token } from "../types.js";

export const base = (token: Token) => {
  const results: Results = [];

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

  // type
  // - resolve type from the $type property
  // - if value is a reference, resolve the type from the correct value
  // - if value has a parent group with type, then resolve the type
  // - type must be a string
  // - error

  // alias
  // - must resolve to a value

  return results;
};
