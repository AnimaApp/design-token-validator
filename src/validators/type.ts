import { TokenValue, Type } from "../types.js";
import { Context } from "../validate.js";
import { validateColor } from "./color.js";
import { validateDimension } from "./dimension.js";

export type TokenValidator = (
  value: TokenValue["$value"],
  context: Context
) => boolean;

export const typeValidators: Record<Type, TokenValidator> = {
  border: () => false,
  color: validateColor,
  cubicBezier: () => false,
  dimension: validateDimension,
  duration: () => false,
  fontFamily: () => false,
  fontWeight: () => false,
  gradient: () => false,
  number: () => false,
  shadow: () => false,
  strokeStyle: () => false,
  transition: () => false,
  typography: () => false,
};
