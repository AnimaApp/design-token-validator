import { validateColor } from "./color.js";
import { TokenValidator } from "./type.js";

export const validateGradient: TokenValidator<"gradient"> = (
  value,
  context
) => {
  if (!Array.isArray(value)) {
    context.messages.push({
      message: `Token value must be an array of gradient stops`,
    });

    return false;
  }

  if (value.length === 0) {
    context.messages.push({
      message: `Token value array does not contain any values`,
    });

    return false;
  }

  const areAllStopsValid = value.every((v) => {
    const { color, position } = v;

    const isValidColor = validateColor(color, context);

    if (!isValidColor) {
      context.messages.push({
        message: `Token value must be a valid color`,
      });

      return false;
    }

    if (typeof position !== "number") {
      context.messages.push({
        message: `Token value must be a valid number`,
      });

      return false;
    }

    return true;
  });

  if (!areAllStopsValid) {
    return false;
  }

  return true;
};
