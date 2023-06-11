import { AliasToken, TokenValue } from "../types.js";

const validAliasRegex = /^\{.*\}$/;

export const isValidAlias = (
  token: TokenValue | AliasToken
): token is AliasToken => {
  if (typeof token.$value !== "string") {
    return false;
  }

  return validAliasRegex.test(token.$value);
};
