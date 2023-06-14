import { TokenGroup, TokenValue, Tokens } from "../types.js";

export const isGroup = (tokens: Tokens): tokens is TokenGroup => {
  const value = Object.values(tokens)[0];

  if (typeof value !== "object") {
    return false;
  }

  const keys = Object.keys(value).filter((key) => {
    return !key.startsWith("$");
  });

  if (keys.length === 0) {
    return false;
  }

  const validValues = Object.values(value).filter((values) => {
    return typeof values === "object";
  });

  if (validValues.length === 0) {
    return false;
  }

  return true;
};
