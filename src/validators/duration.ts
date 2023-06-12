import { TokenValidator } from "./type.js";

const durationRegex = /^\d+(\.\d+)?ms$/;

export const validateDuration: TokenValidator<"duration"> = (
  value,
  context
) => {
  if (durationRegex.test(value)) {
    return true;
  }

  context.report({
    messageId: "invalid-duration",
    args: [value, context.tokenPath],
  });

  return false;
};
