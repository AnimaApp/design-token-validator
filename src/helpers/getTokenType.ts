import { isValidAliasPath } from "../guards/isValidAliasPath.js";
import { Optional, TokenValue, Type } from "../types.js";
import { Context } from "../validate.js";
import { getAliasToken } from "./getAliasValue.js";
import { getClosestGroupType } from "./getClosestGroupType.js";

type TokenValueBeforeTypeResolution = Optional<TokenValue, "$type">;

export const getTokenType = (
  token: TokenValueBeforeTypeResolution,
  context: Context
): Type | undefined => {
  if (token.$type) {
    return token.$type;
  }

  const value = token.$value;

  if (isValidAliasPath(value)) {
    const aliasToken = getAliasToken(value, context);

    if (!aliasToken) {
      context.messages.push({ message: 'Alias path does not exist'})
      return;
    }

    if (aliasToken.$type) {
      return aliasToken.$type as Type;
    }
  }

  // TODO: implement this
  const closestGroupType = getClosestGroupType(token, context);

  if (closestGroupType) {
    return closestGroupType as Type;
  }

  context.messages.push({ message: "Token does not have a type" });
};
