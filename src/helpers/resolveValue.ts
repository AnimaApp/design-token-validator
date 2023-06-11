import { isValidAliasPath } from "../guards/isValidAliasPath.js";
import { TokenValue, Type } from "../types.js";
import { Context } from "../validate.js";
import { getAliasToken } from "./getAliasValue.js";

export const resolveValue = (
  token: TokenValue,
  context: Context
): TokenValue | undefined => {
  const value = token.$value;

  if (isValidAliasPath(value)) {
    const aliasToken = getAliasToken(value, context);

    if (!aliasToken) {
      context.messages.push({ message: "Alias path does not exist" });
      return;
    }

    // TODO: handle multiple aliases
    return aliasToken;
  }

  return token;
};
