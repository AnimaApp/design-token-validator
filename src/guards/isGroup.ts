import { TokenGroup } from "../types.js";

export const isGroup = (token: TokenGroup) => {
  if (token.hasOwnProperty("$value") || token.hasOwnProperty("$type")) {
    return false;
  }

  return true;
};
