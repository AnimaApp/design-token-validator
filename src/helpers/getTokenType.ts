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

  // TODO: resolve type from group
  const closestGroupType = getClosestGroupType(token, context);

  if (closestGroupType) {
    return closestGroupType as Type;
  }

  context.messages.push({ message: "Token does not have a type" });
};
