import { TokenValidator } from "./type.js";

export const validateNumber: TokenValidator<"number"> = (value, context) => {
  if (typeof value !== "number") {
    context.report({
      messageId: "invalid-number",
      args: [context.tokenPath],
    });

    return false;
  }

  // Convert the number to JSON string representation
  const jsonString = JSON.stringify(value);

  // Parse the JSON string to check if it's a valid number
  const parsedValue = JSON.parse(jsonString);

  if ((!parsedValue && parsedValue !== 0) || !isFinite(parsedValue)) {
    context.report({
      messageId: "invalid-number",
      args: [context.tokenPath],
    });

    return false;
  }

  return true;
};
