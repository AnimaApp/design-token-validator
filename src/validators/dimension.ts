import { TokenValidator } from "./type.js";

const dimensionRegex = /^-?\d+(\.\d+)?(?:px|rem)$/;

export const validateDimension: TokenValidator<"dimension"> = (
  value,
  context
) => {
  if (!dimensionRegex.test(value)) {
    context.report({
      messageId: 'invalid-dimension',
      args: [value, context.tokenPath],
    });

    return false;
  }

  return true;
};
