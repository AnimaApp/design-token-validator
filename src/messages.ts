export type MessageKey =
  | "token-does-not-exist"
  | "token-does-not-have-type"
  | "token-not-found-for-path"
  | "invalid-color"
  | "no-dash-array"
  | "invalid-dash-array"
  | "invalid-stroke-style"
  | "invalid-stroke-style-string"
  | "invalid-dimension"
  | "no-line-cap"
  | "invalid-line-cap-value"
  | "no-cubic-bezier"
  | "invalid-cubic-bezier-length"
  | "invalid-cubic-bezier-type"
  | "invalid-cubic-bezier-value"
  | "invalid-duration"
  | "invalid-font-family"
  | "invalid-font-weight"
  | "invalid-font-weight-alias"
  | "invalid-font-weight-number"
  | "invalid-gradient-type"
  | "empty-gradient"
  | "invalid-number"
  | "invalid-json-number"
  | "unknown-token-type";

export const getMessage = (
  key: MessageKey,
  ...args: Array<string | number>
) => {
  const messages: Record<MessageKey, string> = {
    "token-does-not-exist": `Value for token "${args[0]}" does not exist`,
    "token-does-not-have-type": `Token "${args[0]}" does not have a valid type`,
    "token-not-found-for-path": `Alias "${args[0]}" containing path "${args[1]}" does not resolve to a token`,
    "invalid-color": `Value "${args[0]}" for token "${args[1]}" is not a valid color value`,
    "no-dash-array": `Token "${args[0]}" must include a dashArray`,
    "invalid-dash-array": `Property "dashArray" for token "${args[0]}" must be an array of dimensions`,
    "invalid-stroke-style": `Property "strokeStyle" for token "${args[0]}" must be a string or object`,
    "invalid-stroke-style-string": `Value "${args[0]}" for token "${args[1]}" must be a valid stroke style string`,
    "invalid-dimension": `Value "${args[0]}" for token "${args[1]}" is not a valid dimension`,
    "no-line-cap": `Token "${args[0]}" must include a lineCap value`,
    "invalid-line-cap-value": `Property "lineCap" for token "${args[0]}" must be one of the valid lineCap values`,
    "no-cubic-bezier": `Token "${args[0]}" must include a cubicBezier value`,
    "invalid-cubic-bezier-length": `Property "cubicBezier" for token "${args[0]}" must be an array of 4 numbers`,
    "invalid-cubic-bezier-type": `Property "cubicBezier" for token "${args[0]}" must be an array of 4 numbers`,
    "invalid-cubic-bezier-value": `Property "cubicBezier" value "${args[0]}" for token "${args[1]}" must be a number between 0 and 1`,
    "invalid-duration": `Property "duration" value "${args[0]}" for token "${args[1]}" must be a number followed by 'ms'`,
    "invalid-font-family": `Property "fontFamily" for token "${args[0]}" must be a string or array of strings`,
    "invalid-font-weight": `Property "fontFamily" value for token "${args[0]}" must be either a number within range [1 - 1000] or a valid weight alias`,
    "invalid-font-weight-alias": `Property "fontFamily" value "${args[0]}" for token "${args[1]}" must be a valid weight alias`,
    "invalid-font-weight-number": `Property "fontFamily" value "${args[0]}" for token "${args[1]}" must be a number within range [1 - 1000]`,
    "invalid-gradient-type": `Property "gradient" for token "${args[0]}" must be an array of gradient stops`,
    "empty-gradient": `Property "gradient" for token "${args[0]}" does not contain any values`,
    "invalid-number": `Property "number" for token "${args[0]}" must be a valid number`,
    "invalid-json-number": `Property "number" for token "${args[0]}" must not be NaN or Infinity`,
    "unknown-token-type": `Token "${args[0]}" is not a recognised token. Ensure your tokens match the format of the specification.`,
  };

  return messages[key];
};
