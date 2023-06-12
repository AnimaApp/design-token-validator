import { validateColor } from "./color.js";
import { validateNumber } from "./number.js";
import { TokenValidator } from "./type.js";

export const validateGradient: TokenValidator<"gradient"> = (
  value,
  context
) => {
  if (!Array.isArray(value)) {
    context.report({
      messageId: "invalid-gradient-type",
      args: [context.tokenPath],
    });

    return false;
  }

  if (value.length === 0) {
    context.report({
      messageId: "empty-gradient",
      args: [context.tokenPath],
    });

    return false;
  }

  const areAllStopsValid = value.every((v) => {
    const { color, position } = v;

    const isValidColor = validateColor(color, context);

    if (!isValidColor) {
      return false;
    }

    const isValidNumber = validateNumber(position, context);

    if (!isValidNumber) {
      return false;
    }

    return true;
  });

  if (!areAllStopsValid) {
    return false;
  }

  return true;
};
