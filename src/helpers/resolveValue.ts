import { isValidAlias } from "../guards/isValidAlias.js";
import { AliasToken, TokenValue } from "../types.js";
import { Context } from "../validate.js";
import { getAliasToken } from "./getAliasValue.js";

export const resolveValue = (
  token: TokenValue | AliasToken,
  context: Context,
  previousAliases: string[] = []
): TokenValue | undefined => {
  if (isValidAlias(token)) {
    const value = token.$value;

    if (previousAliases.includes(value)) {
      context.report({
        messageId: "alias-circular-dependency",
        args: [value],
      });

      return;
    }

    previousAliases.push(value);

    const aliasToken = getAliasToken(value, context);

    if (!aliasToken) {
      context.report({
        messageId: "token-not-found-for-path",
        args: [context.tokenPath, value],
      });
      return;
    }

    if (isValidAlias(aliasToken)) {
      return resolveValue(aliasToken, context, previousAliases);
    }

    return aliasToken;
  }

  return token;
};
