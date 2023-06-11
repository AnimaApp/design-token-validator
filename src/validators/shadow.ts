import { validateColor } from "./color.js";
import { validateDimension } from "./dimension.js";
import { TokenValidator } from "./type.js";

export const validateShadow: TokenValidator<"shadow"> = (value, context) => {
  const { blur, color, offsetX, offsetY, spread } = value;

  const isValidColor = validateColor(color, context);

  if (!isValidColor) {
    context.messages.push({
      message: `Token value must have a valid color property`,
    });

    return false;
  }

  const isValidOffsetX = validateDimension(offsetX, context);

  if (!isValidOffsetX) {
    context.messages.push({
      message: `Token value must have a valid dimension property`,
    });

    return false;
  }

  const isValidOffsetY = validateDimension(offsetY, context);

  if (!isValidOffsetY) {
    context.messages.push({
      message: `Token value must have a valid dimension property`,
    });

    return false;
  }

  const isValidBlur = validateDimension(blur, context);

  if (!isValidBlur) {
    context.messages.push({
      message: `Token value must have a valid dimension property`,
    });

    return false;
  }

  const isValidSpread = validateDimension(spread, context);

  if (!isValidSpread) {
    context.messages.push({
      message: `Token value must have a valid dimension property`,
    });

    return false;
  }

  return true;
};
