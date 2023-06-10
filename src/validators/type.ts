import { TokenValue, Type } from "../types.js";
import { Context } from "../validate.js";
import { validateColor } from "./color.js";
import { validateDimension } from "./dimension.js";
import { validateFontFamily } from "./fontFamily.js";
import { validateFontWeight } from "./fontWeight.js";

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
  border: () => false,
  // @ts-expect-error
  color: validateColor,
  cubicBezier: () => false,
  // @ts-expect-error
  dimension: validateDimension,
  duration: () => false,
  // @ts-expect-error
  fontFamily: validateFontFamily,
  // @ts-expect-error
  fontWeight: validateFontWeight,
  gradient: () => false,
  number: () => false,
  shadow: () => false,
  strokeStyle: () => false,
  transition: () => false,
  typography: () => false,
};
