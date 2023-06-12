import { isBetween0And1 } from "../guards/isBetween0And1.js";
import { TokenValidator } from "./type.js";

export const validateCubicBezier: TokenValidator<"cubicBezier"> = (
  value,
  context
) => {
  if (!value) {
    context.report({
      messageId: "no-cubic-bezier",
      args: [context.tokenPath],
    });

    return false;
  }

  if (value.length !== 4) {
    context.report({
      messageId: "invalid-cubic-bezier-length",
      args: [context.tokenPath],
    });

    return false;
  }

  if (value.some((v) => typeof v !== "number")) {
    context.report({
      messageId: "invalid-cubic-bezier-type",
      args: [context.tokenPath],
    });

    return false;
  }

  if (!isBetween0And1(value[0])) {
    context.report({
      messageId: "invalid-cubic-bezier-value",
      args: [value[0], context.tokenPath],
    });

    return false;
  }

  if (!isBetween0And1(value[2])) {
    context.report({
      messageId: "invalid-cubic-bezier-value",
      args: [value[2], context.tokenPath],
    });

    return false;
  }

  return true;
};
