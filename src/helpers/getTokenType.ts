import { TokenValueBeforeTypeResolution, Type } from "../types.js";
import { Context } from "../validate.js";
import { getClosestGroupType } from "./getClosestGroupType.js";

export const getTokenType = (
  token: TokenValueBeforeTypeResolution,
  context: Context
): Type | undefined => {
  if (token.$type) {
    return token.$type;
  }

  const closestGroupType = getClosestGroupType(context);

  if (closestGroupType) {
    return closestGroupType as Type;
  }

  context.report({
    messageId: "token-does-not-have-type",
    args: [context.tokenPath],
  });
};
