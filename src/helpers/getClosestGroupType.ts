import { Type } from "../types.js";
import { Context } from "../validate.js";

export const getClosestGroupType = (context: Context): Type | undefined => {
  const reversedPathList = [...context.groups].reverse();
  const firstGroup = reversedPathList.find((group) => {
    return group.type;
  });

  return firstGroup?.type;
};
