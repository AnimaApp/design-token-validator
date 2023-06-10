import { isGroup, isTokenValue } from "./guards/isGroup.js";
import { Token, TokenGroup, Tokens } from "./types.js";

export interface VisitorFunctions {
  group?: (group: TokenGroup) => void;
  token?: (token: Token) => void;
}

export const walk = (tokens: Tokens, visitorFunctions: VisitorFunctions) => {
  const tokenEntries = Object.entries(tokens);

  tokenEntries.forEach(([key, token]) => {
    const currentToken = { [key]: token };

    if (isGroup(currentToken)) {
      if (visitorFunctions.group) {
        visitorFunctions.group(currentToken);
      }

      walk(token, visitorFunctions);
    } else if (isTokenValue(currentToken)) {
      if (visitorFunctions.token) {
        visitorFunctions.token(currentToken);
      }
    }
  });

  return;
};
