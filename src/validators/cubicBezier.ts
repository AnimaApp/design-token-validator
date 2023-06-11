import { isBetween0And1 } from "../guards/isBetween0And1.js";
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



  if (!isBetween0And1(value[0])) {
    context.messages.push({
      message: `Token value[0] must be a number between 0 and 1`,
    });

    return false;
  }

  if (!isBetween0And1(value[2])) {
    context.messages.push({
      message: `Token value[2] must be a number between 0 and 1`,
    });

    return false;
  }

  return true;
};
