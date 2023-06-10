import { TokenValidator } from "./type.js";

export const validateNumber: TokenValidator<"number"> = (value, context) => {
  if (typeof value !== "number") {
    context.messages.push({
      message: `Token value must be a number`,
    });

    return false;
  }

  // Convert the number to JSON string representation
  const jsonString = JSON.stringify(value);

  // Parse the JSON string to check if it's a valid number
  const parsedValue = JSON.parse(jsonString);

  if (!parsedValue || !isFinite(parsedValue)) {
    context.messages.push({
      message: `Token value must cannot be NaN or Infinity`,
    });

    return false;
  }

  return true;
};
