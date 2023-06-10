import { TokenValidator } from "./type.js";

const durationRegex = /^\d+(\.\d+)?ms$/;

export const validateDuration: TokenValidator<"duration"> = (
  value,
  context
) => {
  if (durationRegex.test(value)) {
    return true;
  }

  context.messages.push({
    message: `Token value must be an number followed by "ms"`,
  });

  return false;
};
