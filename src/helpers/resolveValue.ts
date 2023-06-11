import { isValidAlias } from "../guards/isValidAlias.js";
import { AliasToken, TokenValue } from "../types.js";
import { Context } from "../validate.js";
import { getAliasToken } from "./getAliasValue.js";

export const resolveValue = (
  token: TokenValue | AliasToken,
  context: Context
): TokenValue | undefined => {
  if (isValidAlias(token)) {
    const value = token.$value;
    const aliasToken = getAliasToken(value, context);

    if (!aliasToken) {
      context.messages.push({ message: "Alias path does not exist" });
      return;
    }

    if (isValidAlias(aliasToken)) {
      return resolveValue(aliasToken, context);
    }

    return aliasToken;
  }

  return token;
};
