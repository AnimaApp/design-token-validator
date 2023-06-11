export const splitAliasPath = (aliasPath: string): string[] => {
  // Remove the outer "{" and "}"
  const cleanedAliasPath = aliasPath.slice(1, -1);
  return cleanedAliasPath.split(".");
};
