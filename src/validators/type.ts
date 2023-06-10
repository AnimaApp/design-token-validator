import { TokenValue, Type } from "../types.js";
import { Context } from "../validate.js";
import { validateBorder } from "./border.js";
import { validateColor } from "./color.js";
import { validateCubicBezier } from "./cubicBezier.js";
import { validateDimension } from "./dimension.js";
import { validateDuration } from "./duration.js";
import { validateFontFamily } from "./fontFamily.js";
import { validateFontWeight } from "./fontWeight.js";
import { validateNumber } from "./number.js";
import { validateStrokeStyle } from "./strokeStyle.js";
import { validateTransition } from "./transition.js";

export type TokenValidator<T extends Type> = (
  value: Extract<TokenValue, { $type: T }>["$value"],
  context: Context
) => boolean;

/* 
  The typeValidators doesn't narrow the types down for the specific token type
  Which is why I'm adding @ts-expect-error here

  We can remove these once we can get TS to narrow correctly
*/
export const typeValidators: Record<Type, TokenValidator<Type>> = {
  // @ts-expect-error
  border: validateBorder,
  // @ts-expect-error
  color: validateColor,
  // @ts-expect-error
  cubicBezier: validateCubicBezier,
  // @ts-expect-error
  dimension: validateDimension,
  // @ts-expect-error
  duration: validateDuration,
  // @ts-expect-error
  fontFamily: validateFontFamily,
  // @ts-expect-error
  fontWeight: validateFontWeight,
  gradient: () => false,
  // @ts-expect-error
  number: validateNumber,
  shadow: () => false,
  // @ts-expect-error
  strokeStyle: validateStrokeStyle,
  // @ts-expect-error
  transition: validateTransition,
  typography: () => false,
};
