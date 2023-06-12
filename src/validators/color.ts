import { TokenValidator } from "./type.js";

const hexRegex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;

export const validateColor: TokenValidator<"color"> = (value, context) => {
  if (!hexRegex.test(value)) {
    context.report({
      messageId: "invalid-color",
      args: [value, context.tokenPath],
    });

    return false;
  }

  return true;
};
