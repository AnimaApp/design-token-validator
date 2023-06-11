import { Context } from "../validate.js";
import { GroupPath } from "../walk.js";

export const getClosestGroupType = (
  path: GroupPath[] = [],
  context: Context
): string => {
  const reversedPathList = [...path].reverse();
  const firstGroup = reversedPathList.find((group) => {
    return group.type;
  });

  if (!firstGroup?.type) {
    context.messages.push({
      message: "Token does not have a type in the group",
    });
  }

  return firstGroup?.type || "";
};
