import { TokenValidator } from "./type.js";

export const validateFontFamily: TokenValidator<"fontFamily"> = (
  value,
  context
) => {
  if (typeof value === "string") {
    return true;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      context.report({
        messageId: "invalid-font-family",
        args: [context.tokenPath],
      });

      return false;
    }

    const isValidArray = value.every((v) => typeof v === "string");

    if (isValidArray) {
      return true;
    }
  }

  context.report({
    messageId: "invalid-font-family",
    args: [context.tokenPath],
  });

  return false;
};
