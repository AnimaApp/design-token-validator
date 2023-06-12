import { lineCapValues, strokeStyleValues } from "../constants.js";
import { validateDimension } from "./dimension.js";
import { TokenValidator } from "./type.js";

export const validateStrokeStyle: TokenValidator<"strokeStyle"> = (
  value,
  context
) => {
  if (typeof value === "object") {
    const { dashArray, lineCap } = value;

    if (!dashArray) {
      context.report({
        messageId: "no-dash-array",
        args: [context.tokenPath],
      });

      return false;
    }

    if (!Array.isArray(dashArray)) {
      context.report({
        messageId: "invalid-dash-array",
        args: [context.tokenPath],
      });

      return false;
    }

    const isDashArrayValid = dashArray.every((v) => {
      return validateDimension(v, context);
    });

    if (!isDashArrayValid) {
      return false;
    }

    if (!lineCap || typeof lineCap !== "string") {
      context.report({
        messageId: "no-line-cap",
        args: [context.tokenPath],
      });

      return false;
    }

    if (!lineCapValues.includes(lineCap)) {
      context.report({
        messageId: "invalid-line-cap-value",
        args: [context.tokenPath],
      });

      return false;
    }

    return true;
  } else if (typeof value === "string") {
    if (!strokeStyleValues.includes(value)) {
      context.report({
        messageId: "invalid-stroke-style-string",
        args: [value, context.tokenPath],
      });

      return false;
    }

    return true;
  }

  context.report({
    messageId: "invalid-stroke-style",
    args: [context.tokenPath],
  });

  return false;
};
