import { TokenValue, Tokens } from "../types.js";

export const isTokenValue = (
  token: Tokens
): token is { [key: string]: TokenValue } => {
  const value = Object.values(token)[0];
  if (!value.hasOwnProperty("$value")) {
    return false;
  }

  return true;
};
