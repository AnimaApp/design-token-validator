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
      context.messages.push({
        message: `Token value array does not contain any values`,
      });

      return false;
    }

    const isValidArray = value.every((v) => typeof v === "string");

    if (isValidArray) {
      return true;
    }
  }

  context.messages.push({
    message: `Token value must be a valid font family`,
  });

  return false;
};
