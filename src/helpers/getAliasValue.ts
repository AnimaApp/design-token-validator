import { isTokenValue } from "../guards/isTokenValue.js";
import { TokenGroup, TokenValue, Tokens } from "../types.js";
import { Context } from "../validate.js";
import { splitAliasPath } from "./splitAliasPath.js";

export const getAliasToken = (
  value: string,
  context: Context
): TokenValue | undefined => {
  const aliasPath = splitAliasPath(value);
  const { tokens } = context;
  const res = findTokenByPath(aliasPath, tokens);

  return res;
};

const findTokenByPath = (
  path: string[],
  tokens: Tokens
): TokenValue | undefined => {
  if (!path.length) return;

  const entries = Object.entries(tokens);

  let res: any;

  entries.forEach(([key, value]) => {
    const currValue = { [key]: value };

    if (!res) {
      res = getValueByPath(path, currValue);
    }
  });

  return res;
};

const getValueByPath = (
  path: string[],
  tokens: TokenGroup
): TokenValue | undefined => {
  const currentPath = path[0];
  const restOfPath = path.slice(1);

  if (isTokenValue(tokens)) {
    const tokenKey = Object.keys(tokens)[0];

    if (!restOfPath.length && tokenKey === currentPath) {
      return tokens[tokenKey];
    }

    return;
  }

  const currentValue = tokens[currentPath];

  // TODO ignore any any properties that begin with "$"
  if (!currentValue || typeof currentValue === "string") {
    return;
  }

  return findTokenByPath(restOfPath, currentValue);
};
