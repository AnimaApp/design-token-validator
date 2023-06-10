import { TokenValue, Type } from "../types.js";
import { Context } from "../validate.js";
import { colorValidator } from "./color.js";

export type TokenValidator = (
  token: TokenValue["$value"],
  context: Context
) => boolean;

export const typeValidators: Record<Type, TokenValidator> = {
  border: () => false,
  color: colorValidator,
  cubicBezier: () => false,
  dimension: () => false,
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
