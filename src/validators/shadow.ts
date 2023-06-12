import { validateColor } from "./color.js";
import { validateDimension } from "./dimension.js";
import { TokenValidator } from "./type.js";

export const validateShadow: TokenValidator<"shadow"> = (value, context) => {
  const { blur, color, offsetX, offsetY, spread } = value;

  const isValidColor = validateColor(color, context);

  if (!isValidColor) {
    return false;
  }

  const isValidOffsetX = validateDimension(offsetX, context);

  if (!isValidOffsetX) {
    return false;
  }

  const isValidOffsetY = validateDimension(offsetY, context);

  if (!isValidOffsetY) {
    return false;
  }

  const isValidBlur = validateDimension(blur, context);

  if (!isValidBlur) {
    return false;
  }

  const isValidSpread = validateDimension(spread, context);

  if (!isValidSpread) {
    return false;
  }

  return true;
};
