import { TokenValidator } from "./type.js";

const dimensionRegex = /^-?\d+(\.\d+)?(?:px|rem)$/;

export const validateDimension: TokenValidator<"dimension"> = (
  value,
  context
) => {
  if (!dimensionRegex.test(value)) {
    context.messages.push({
      message: `Token value must be a valid dimension`,
    });

    return false;
  }

  return true;
};
