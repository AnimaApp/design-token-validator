import { weightAliases } from "../constants.js";
import { TokenValidator } from "./type.js";

export const validateFontWeight: TokenValidator<"fontWeight"> = (
  value,
  context
) => {
  if (typeof value === "number") {
    if (value < 1 || value > 1000) {
      context.report({
        messageId: "invalid-font-weight-number",
        args: [value, context.tokenPath],
      });

      return false;
    }

    return true;
  }

  if (typeof value === "string") {
    if (weightAliases.includes(value)) {
      return true;
    }

    context.report({
      messageId: "invalid-font-weight",
      args: [context.tokenPath],
    });

    return false;
  }

  context.report({
    messageId: "invalid-font-weight",
    args: [context.tokenPath],
  });

  return false;
};
