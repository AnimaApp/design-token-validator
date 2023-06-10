import { isValidAlias } from "../guards/isValidAlias.js";
import { TokenValue, Type } from "../types.js";
import { Context } from "../validate.js";
import { getAliasToken } from "./getAliasValue.js";
import { getClosestGroupType } from "./getClosestGroupType.js";

export const getTokenType = (
  token: TokenValue,
  context: Context
): Type | undefined => {
  if (token.$type) {
    return token.$type;
  }

  const value = token.$value;

  if (isValidAlias(value)) {
    // TODO: implement this
    const aliasToken = getAliasToken(value, context);

    return aliasToken.$type as Type;
  }

  // TODO: implement this
  const closestGroupType = getClosestGroupType(token, context);

  if (closestGroupType) {
    return closestGroupType as Type;
  }

  context.messages.push({ message: "Token does not have a type" });
};
