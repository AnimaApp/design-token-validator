import { TokenValue } from "../types.js";

const validAliasRegex = /^\{.*\}$/;

export const isValidAliasPath = (value: TokenValue["$value"]): value is string => {
  if (typeof value !== "string") {
    return false;
  }

  return validAliasRegex.test(value);
};
