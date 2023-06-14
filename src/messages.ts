export type MessageKey =
  | "token-does-not-have-name"
  | "token-has-invalid-characters"
  | "token-does-not-have-value"
  | "token-does-not-have-type"
  | "token-has-invalid-type"
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

export interface Message {
  label: string;
  message: string;
  reference: string;
  key: MessageKey;
}

export const getMessage = (
  key: MessageKey,
  ...args: Array<string | number>
) => {
  const messages: Record<MessageKey, Message> = {
    "token-does-not-have-name": {
      key: "token-does-not-have-name",
      reference:
        "https://design-tokens.github.io/community-group/format/#name-and-value",
      label: "Token does not have name",
      message: `Token in path "${args[0]}" does not have a name`,
    },
    "token-does-not-have-value": {
      key: "token-does-not-have-value",
      reference:
        "https://design-tokens.github.io/community-group/format/#types",
      label: "Token does not have value",
      message: `Token "${args[0]}" does not have a value`,
    },
    "token-has-invalid-characters": {
      key: "token-has-invalid-characters",
      reference:
        "https://design-tokens.github.io/community-group/format/#character-restrictions",
      label: "Token contains invalid characters",
      message: `Token "${args[0]}" contains invalid characters. It cannot start with "$" or contain "{" or "}" or "."`,
    },
    "token-does-not-have-type": {
      key: "token-does-not-have-type",
      reference:
        "https://design-tokens.github.io/community-group/format/#type-0",
      label: "Token does not have type",
      message: `Token "${args[0]}" does not have a valid type`,
    },
    "token-has-invalid-type": {
      key: "token-has-invalid-type",
      reference:
        "https://design-tokens.github.io/community-group/format/#types",
      label: "Token has invalid type",
      message: `Token "${args[0]}" has invalid type "${args[1]}"`,
    },
    "token-not-found-for-path": {
      key: "token-not-found-for-path",
      reference:
        "https://design-tokens.github.io/community-group/format/#aliases-references",
      label: "Alias does not resolve to token",
      message: `Alias "${args[0]}" containing path "${args[1]}" does not resolve to a token`,
    },
    "invalid-color": {
      key: "invalid-color",
      reference:
        "https://design-tokens.github.io/community-group/format/#aliases-references",
      label: "Invalid color",
      message: `Value "${args[0]}" for token "${args[1]}" is not a valid color value`,
    },
    "no-dash-array": {
      key: "no-dash-array",
      reference:
        "https://design-tokens.github.io/community-group/format/#object-value",
      label: "Missing dashArray",
      message: `Token "${args[0]}" must include a dashArray`,
    },
    "invalid-dash-array": {
      key: "invalid-dash-array",
      reference:
        "https://design-tokens.github.io/community-group/format/#object-value",
      label: "Invalid dashArray",
      message: `Property "dashArray" for token "${args[0]}" must be an array of dimensions`,
    },
    "invalid-stroke-style": {
      key: "invalid-stroke-style",
      reference:
        "https://design-tokens.github.io/community-group/format/#stroke-style",
      label: "Invalid strokeStyle",
      message: `Property "strokeStyle" for token "${args[0]}" must be a string or object`,
    },
    "invalid-stroke-style-string": {
      key: "invalid-stroke-style-string",
      reference:
        "https://design-tokens.github.io/community-group/format/#string-value",
      label: "Invalid strokeStyle string",
      message: `Value "${args[0]}" for token "${args[1]}" must be a valid stroke style string`,
    },
    "invalid-dimension": {
      key: "invalid-dimension",
      reference:
        "https://design-tokens.github.io/community-group/format/#dimension",
      label: "Invalid dimension",
      message: `Value "${args[0]}" for token "${args[1]}" is not a valid dimension`,
    },
    "no-line-cap": {
      key: "no-line-cap",
      reference:
        "https://design-tokens.github.io/community-group/format/#object-value",
      label: "Missing lineCap",
      message: `Token "${args[0]}" must include a lineCap value`,
    },
    "invalid-line-cap-value": {
      key: "invalid-line-cap-value",
      reference:
        "https://design-tokens.github.io/community-group/format/#object-value",
      label: "Invalid lineCap string",
      message: `Property "lineCap" for token "${args[0]}" must be one of the valid lineCap values`,
    },
    "no-cubic-bezier": {
      key: "no-cubic-bezier",
      reference:
        "https://design-tokens.github.io/community-group/format/#cubic-bezier",
      label: "Missing cubicBezier",
      message: `Token "${args[0]}" must include a cubicBezier value`,
    },
    "invalid-cubic-bezier-length": {
      key: "invalid-cubic-bezier-length",
      reference:
        "https://design-tokens.github.io/community-group/format/#cubic-bezier",
      label: "Invalid cubicBezier length",
      message: `Property "cubicBezier" for token "${args[0]}" must be an array of 4 numbers`,
    },
    "invalid-cubic-bezier-type": {
      key: "invalid-cubic-bezier-type",
      reference:
        "https://design-tokens.github.io/community-group/format/#cubic-bezier",
      label: "Invalid cubicBezier type",
      message: `Property "cubicBezier" for token "${args[0]}" must be an array of 4 numbers`,
    },
    "invalid-cubic-bezier-value": {
      key: "invalid-cubic-bezier-value",
      reference:
        "https://design-tokens.github.io/community-group/format/#cubic-bezier",
      label: "Invalid cubicBezier value",
      message: `Property "cubicBezier" value "${args[0]}" for token "${args[1]}" must be a number between 0 and 1`,
    },
    "invalid-duration": {
      key: "invalid-duration",
      reference:
        "https://design-tokens.github.io/community-group/format/#duration",
      label: "Invalid duration",
      message: `Property "duration" value "${args[0]}" for token "${args[1]}" must be a number followed by 'ms'`,
    },
    "invalid-font-family": {
      key: "invalid-font-family",
      reference:
        "https://design-tokens.github.io/community-group/format/#font-family",
      label: "Invalid fontFamily",
      message: `Property "fontFamily" for token "${args[0]}" must be a string or array of strings`,
    },
    "invalid-font-weight": {
      key: "invalid-font-weight",
      reference:
        "https://design-tokens.github.io/community-group/format/#font-weight",
      label: "Invalid fontWeight",
      message: `Property "fontFamily" value for token "${args[0]}" must be either a number within range [1 - 1000] or a valid weight alias`,
    },
    "invalid-font-weight-alias": {
      key: "invalid-font-weight-alias",
      reference:
        "https://design-tokens.github.io/community-group/format/#font-weight",
      label: "Invalid fontWeight string",
      message: `Property "fontFamily" value "${args[0]}" for token "${args[1]}" must be a valid weight string`,
    },
    "invalid-font-weight-number": {
      key: "invalid-font-weight-number",
      reference:
        "https://design-tokens.github.io/community-group/format/#font-weight",
      label: "INvalid fontWeight number",
      message: `Property "fontFamily" value "${args[0]}" for token "${args[1]}" must be a number within range [1 - 1000]`,
    },
    "invalid-gradient-type": {
      key: "invalid-gradient-type",
      reference:
        "https://design-tokens.github.io/community-group/format/#gradient",
      label: "Invalid gradient type",
      message: `Property "gradient" for token "${args[0]}" must be an array of gradient stops`,
    },
    "empty-gradient": {
      key: "empty-gradient",
      reference:
        "https://design-tokens.github.io/community-group/format/#gradient",
      label: "Empty gradient",
      message: `Property "gradient" for token "${args[0]}" does not contain any values`,
    },
    "invalid-number": {
      key: "invalid-number",
      reference:
        "https://design-tokens.github.io/community-group/format/#number",
      label: "Invalid number",
      message: `Property "number" for token "${args[0]}" must be a valid number`,
    },
    "invalid-json-number": {
      key: "invalid-json-number",
      reference:
        "https://design-tokens.github.io/community-group/format/#number",
      label: "Invalid JSON number",
      message: `Property "number" for token "${args[0]}" must not be NaN or Infinity`,
    },
    "unknown-token-type": {
      key: "unknown-token-type",
      reference:
        "https://design-tokens.github.io/community-group/format/#name-and-value",
      label: "Unknown token",
      message: `Token "${args[0]}" is not a valid token. A token must have a property "$value". Ensure your tokens match the format of the specification.`,
    },
  };

  return messages[key];
};
