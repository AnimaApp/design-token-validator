import { TokenValidator } from "./type.js";

export const validateCubicBezier: TokenValidator<"cubicBezier"> = (
  value,
  context
) => {
  if (!value) {
    context.messages.push({
      message: `Token value must be an array of 4 numbers`,
    });

    return false;
  }

  if (value.length !== 4) {
    context.messages.push({
      message: `Token value must consist of 4 numbers`,
    });

    return false;
  }

  if (value.some((v) => typeof v !== "number")) {
    context.messages.push({
      message: `Token value must be an array of 4 numbers`,
    });

    return false;
  }

  if (value[0] < 0 || value[0] > 1) {
    context.messages.push({
      message: `Token value[0] must be a number between 0 and 1`,
    });

    return false;
  }

  if (value[2] < 0 || value[2] > 1) {
    context.messages.push({
      message: `Token value[2] must be a number between 0 and 1`,
    });

    return false;
  }

  return true;
};
