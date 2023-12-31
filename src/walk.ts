import { isGroup } from "./guards/isGroup.js";
import { isRootException } from "./guards/isRootException.js";
import { isTokenValue } from "./guards/isTokenValue.js";
import { Token, TokenGroup, Tokens, Type } from "./types.js";

export type GroupPath = {
  name: string;
  type?: Type;
};

export interface VisitorFunctions {
  group?: (group: TokenGroup, path: GroupPath[]) => void;
  token?: (token: Token, path: GroupPath[]) => void;
  unknown?: (token: Token, path: GroupPath[]) => void;
}

export const walk = (
  tokens: Tokens,
  visitorFunctions: VisitorFunctions,
  initialPath: GroupPath[] = []
) => {
  const tokenEntries = Object.entries(tokens);

  let path = initialPath;
  const isRoot = initialPath.length === 0;

  if (isRoot) {
    path = [{ name: "root" }];

    if (tokens.$type) {
      path[0]["type"] = tokens.$type;
    }
  }

  tokenEntries.forEach(([key, token]) => {
    const type = token.$type;
    const currentToken = { [key]: token };

    if (isGroup(currentToken)) {
      // ignore any properties that begin with "$"
      Object.keys(token).forEach((k) => {
        if (k.startsWith("$")) {
          delete token[k];
        }
      });

      const group: GroupPath = { name: key };

      if (type) {
        group["type"] = type;
      }

      const updatedPath: GroupPath[] = [...path, group];
      if (visitorFunctions.group) {
        visitorFunctions.group(currentToken, updatedPath);
      }

      walk(token, visitorFunctions, updatedPath);
    } else if (isTokenValue(currentToken)) {
      const tokenPath: GroupPath = { name: key };

      if (type) {
        tokenPath["type"] = type;
      }

      const updatedPath: GroupPath[] = [...path, tokenPath];

      if (visitorFunctions.token) {
        visitorFunctions.token(currentToken, updatedPath);
      }
    } else if (isRootException(currentToken, isRoot)) {
      // do nothing
    } else if (visitorFunctions.unknown) {
      const tokenPath: GroupPath = { name: key };
      const updatedPath: GroupPath[] = [...path, tokenPath];
      visitorFunctions.unknown(currentToken, updatedPath);
    }
  });

  return;
};
