import { validateColor } from "./color.js";
import { validateDimension } from "./dimension.js";
import { validateStrokeStyle } from "./strokeStyle.js";
import { TokenValidator } from "./type.js";

export const validateBorder: TokenValidator<"border"> = (value, context) => {
  const { color, style, width } = value;

  const isValidColor = validateColor(color, context);

  if (!isValidColor) {
    context.messages.push({
      message: `Token value must have a valid color property`,
    });

    return false;
  }

  const isValidStroke = validateStrokeStyle(style, context);

  if (!isValidStroke) {
    context.messages.push({
      message: `Token value must have a valid style property`,
    });

    return false;
  }

  const isValidWidth = validateDimension(width, context);

  if (!isValidWidth) {
    context.messages.push({
      message: `Token value must have a valid width property`,
    });

    return false;
  }

  return true;
};
