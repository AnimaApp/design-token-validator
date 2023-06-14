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
  const isValidFontSize = validateDimension(fontSize, context);
  const isValidFontWeight = validateFontWeight(fontWeight, context);
  const isValidLetterSpacing = validateDimension(letterSpacing, context);
  const isValidLineHeight = validateNumber(lineHeight, context);
  
  if (!isValidFontFamily || !isValidFontSize || !isValidFontWeight || !isValidLetterSpacing || !isValidLineHeight) {
  return false
  }

  return true;
};
