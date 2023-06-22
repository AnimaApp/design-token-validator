import { Tokens } from "../types.js";
import { isValidTokenType } from "./isValidTokenType.js";

// Normally we would add a warning if $value doesn't exist, but if the root contains a $type property, then we consider this an exception.
export const isRootException = (token: Tokens, isRoot: boolean) => {
  if (!isRoot) return false;

  if (!token.$type) return false;

  return isValidTokenType(token.$type);
};
