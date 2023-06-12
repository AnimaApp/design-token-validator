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
    return false;
  }

  const isValidFontSize = validateDimension(fontSize, context);

  if (!isValidFontSize) {
    return false;
  }

  const isValidFontWeight = validateFontWeight(fontWeight, context);

  if (!isValidFontWeight) {
    return false;
  }

  const isValidLetterSpacing = validateDimension(letterSpacing, context);

  if (!isValidLetterSpacing) {
    return false;
  }

  const isValidLineHeight = validateNumber(lineHeight, context);

  if (!isValidLineHeight) {
    return false;
  }

  return true;
};
