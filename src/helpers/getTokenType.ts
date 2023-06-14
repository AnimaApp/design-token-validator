import { tokenTypes } from "../constants.js";
import { TokenValueBeforeTypeResolution, Type } from "../types.js";
import { Context } from "../validate.js";
import { getClosestGroupType } from "./getClosestGroupType.js";

const isValidTokenType = (tokenType: Type): boolean => {
  return tokenTypes.includes(tokenType);
};

export const getTokenType = (
  token: TokenValueBeforeTypeResolution,
  context: Context
): Type | undefined => {
  if (token.$type) {
    if (!isValidTokenType(token.$type)) {
      context.report({
        messageId: "token-has-invalid-type",
        args: [context.tokenPath, token.$type],
      });

      return;
    }

    return token.$type;
  }

  const closestGroupType = getClosestGroupType(context);

  if (closestGroupType) {
    if (!isValidTokenType(closestGroupType)) {
      context.report({
        messageId: "token-has-invalid-type",
        args: [context.tokenPath, closestGroupType],
      });
      return;
    }

    return closestGroupType as Type;
  }

  context.report({
    messageId: "token-does-not-have-type",
    args: [context.tokenPath],
  });
};
