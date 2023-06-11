import { Token, TokenGroup, TokenValue, Tokens } from "../types.js";

export const isGroup = (tokens: Tokens): tokens is TokenGroup => {
  const value = Object.values(tokens)[0];

  if (value.hasOwnProperty("$value") || value.hasOwnProperty("$type")) {
    return false;
  }

  return true;
};

export const isTokenValue = (
  token: Tokens
): token is { [key: string]: TokenValue } => {
  const value = Object.values(token)[0];
  if (!value.hasOwnProperty("$value") && !value.hasOwnProperty("$type")) {
    return false;
  }

  return true;
};
