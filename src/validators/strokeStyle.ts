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
      context.messages.push({
        message: `Token value must be an object with a dashArray property`,
      });

      return false;
    }

    if (!Array.isArray(dashArray)) {
      context.messages.push({
        message: `dashArray must be an array of dimension values`,
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
      context.messages.push({
        message: `lineCap must be one of the valid lineCap values`,
      });

      return false;
    }

    if (!lineCapValues.includes(lineCap)) {
      context.messages.push({
        message: `lineCap must be one of the valid lineCap values`,
      });

      return false;
    }

    return true;
  } else if (typeof value === "string") {
    if (!strokeStyleValues.includes(value)) {
      context.messages.push({
        message: `Token value must be one of the valid stroke style values`,
      });

      return false;
    }

    return true;
  }
  
  context.messages.push({
    message: `Token value must be a valid stroke style`,
  });

  return false;
};
