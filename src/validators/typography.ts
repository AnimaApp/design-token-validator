import { validateDimension } from "./dimension.js";
import { validateFontFamily } from "./fontFamily.js";
import { validateFontWeight } from "./fontWeight.js";
import { validateNumber } from "./number.js";
import { TokenValidator } from "./type.js";

export const validateTypography: TokenValidator<"typography"> = (
  value,
  context
) => {
  const { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } = value;

  const isValidFontFamily = validateFontFamily(fontFamily, context);

  if (!isValidFontFamily) {
    context.messages.push({
      message: `Token value must be a valid font family`,
    });

    return false;
  }

  const isValidFontSize = validateDimension(fontSize, context);

  if (!isValidFontSize) {
    context.messages.push({
      message: `Token value must be a valid font size`,
    });

    return false;
  }

  const isValidFontWeight = validateFontWeight(fontWeight, context);

  if (!isValidFontWeight) {
    context.messages.push({
      message: `Token value must be a valid font weight`,
    });

    return false;
  }

  const isValidLetterSpacing = validateDimension(letterSpacing, context);

  if (!isValidLetterSpacing) {
    context.messages.push({
      message: `Token value must be a valid letter spacing`,
    });

    return false;
  }

  const isValidLineHeight = validateNumber(lineHeight, context);

  if (!isValidLineHeight) {
    context.messages.push({
      message: `Token value must be a valid line height`,
    });

    return false;
  }

  return true;
};
