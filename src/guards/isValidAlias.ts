import { TokenValue } from "../types.js";

const validAliasRegex = /^\{.*\}$/;

export const isValidAlias = (value: TokenValue["$value"]) => {
  if (typeof value !== "string") {
    return false;
  }

  return validAliasRegex.test(value);
};
