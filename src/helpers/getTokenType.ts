import { TokenValueBeforeTypeResolution, Type } from "../types.js";
import { Context } from "../validate.js";
import { GroupPath } from "../walk.js";
import { getClosestGroupType } from "./getClosestGroupType.js";

export const getTokenType = (
  token: TokenValueBeforeTypeResolution,
  context: Context,
  path: GroupPath[] = []
): Type | undefined => {
  if (token.$type) {
    return token.$type;
  }

  const closestGroupType = getClosestGroupType(path, context);

  if (closestGroupType) {
    return closestGroupType as Type;
  }

  context.messages.push({ message: "Token does not have a type" });
};
