import { Token, Type } from "../types.js";

export const typeValidators: Record<Type, (token: Token) => boolean> = {
  border: () => false,
  color: () => false,
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
