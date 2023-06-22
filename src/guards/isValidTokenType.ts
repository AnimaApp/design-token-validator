import { tokenTypes } from "../constants.js";
import { Type } from "../types.js";

export const isValidTokenType = (tokenType: Type): boolean => {
  return tokenTypes.includes(tokenType);
};