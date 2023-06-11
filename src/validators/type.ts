import { TokenValue, Type } from "../types.js";
import { Context } from "../validate.js";
import { validateBorder } from "./border.js";
import { validateColor } from "./color.js";
import { validateCubicBezier } from "./cubicBezier.js";
import { validateDimension } from "./dimension.js";
import { validateDuration } from "./duration.js";
import { validateFontFamily } from "./fontFamily.js";
import { validateFontWeight } from "./fontWeight.js";
import { validateGradient } from "./gradient.js";
import { validateNumber } from "./number.js";
import { validateShadow } from "./shadow.js";
import { validateStrokeStyle } from "./strokeStyle.js";
import { validateTransition } from "./transition.js";
import { validateTypography } from "./typography.js";

export type TokenValidator<T extends Type> = (
  value: Extract<TokenValue, { $type: T }>["$value"],
  context: Context
) => boolean;

type TokenValidators<T extends Type> = {
  [K in T]: TokenValidator<K>;
};

export const typeValidators: TokenValidators<Type> = {
  border: validateBorder,
  color: validateColor,
  cubicBezier: validateCubicBezier,
  dimension: validateDimension,
  duration: validateDuration,
  fontFamily: validateFontFamily,
  fontWeight: validateFontWeight,
  gradient: validateGradient,
  number: validateNumber,
  shadow: validateShadow,
  strokeStyle: validateStrokeStyle,
  transition: validateTransition,
  typography: validateTypography,
};
