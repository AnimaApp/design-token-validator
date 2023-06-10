import { weightAliases } from "../constants.js";
import { TokenValidator } from "./type.js";

export const validateFontWeight: TokenValidator<"fontWeight"> = (
  value,
  context
) => {
  if (typeof value === "number") {
    if (value < 1 || value > 1000) {
      context.messages.push({
        message: `Token value must be a number in the range of [1 - 1000] or a valid font weight alias`,
      });

      return false;
    }

    return true;
  }

  if (typeof value === "string") {
    if (weightAliases.includes(value)) {
      return true;
    }
  }

  context.messages.push({
    message: `Token value must be a number in the range of [1 - 1000] or a valid font weight alias`,
  });

  return false;
};
