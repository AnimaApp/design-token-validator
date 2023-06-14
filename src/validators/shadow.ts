import { validateColor } from "./color.js";
import { validateDimension } from "./dimension.js";
import { TokenValidator } from "./type.js";

export const validateShadow: TokenValidator<"shadow"> = (value, context) => {
  const { blur, color, offsetX, offsetY, spread } = value;

  const isValidColor = validateColor(color, context);
  const isValidOffsetX = validateDimension(offsetX, context);
  const isValidOffsetY = validateDimension(offsetY, context);
  const isValidBlur = validateDimension(blur, context);
  const isValidSpread = validateDimension(spread, context);

  if (!isValidBlur || !isValidColor || !isValidOffsetX || !isValidOffsetY || !isValidSpread) {
    return false;
  }

  return true;
};
