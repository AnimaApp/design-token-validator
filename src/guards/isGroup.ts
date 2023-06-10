import { Token, TokenGroup, TokenValue } from "../types.js";

export const isGroup = (token: TokenGroup) => {
  const value = Object.values(token)[0];  
  
  if (value.hasOwnProperty("$value") || value.hasOwnProperty("$type")) {
    return false;
  }
  
  return true;
};

export const isTokenValue = (token: Token) => {
  const value = Object.values(token)[0];  
  if (!value.hasOwnProperty("$value") && !value.hasOwnProperty("$type")) {
    return false;
  }

  return true;
};
