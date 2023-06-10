import { TokenValidator } from "./type.js";

const hexRegexPattern = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;

export const colorValidator: TokenValidator = (value, context) => {
  if (!hexRegexPattern.test(value)) {
    context.messages.push({
      message: `Invalid color value: ${value}`,
    });

    return false;
  }

  return true;
};
