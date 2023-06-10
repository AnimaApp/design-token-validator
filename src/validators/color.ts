import { TokenValidator } from "./type.js";

const hexRegex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;

export const validateColor: TokenValidator<'color'> = (value, context) => {
  if (!hexRegex.test(value)) {
    context.messages.push({
      message: `Invalid color value: ${value}`,
    });

    return false;
  }

  return true;
};
