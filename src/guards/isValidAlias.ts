const validAliasRegex = /^\{.*\}$/;

export const isValidAlias = (value: string) => {
  return validAliasRegex.test(value)
};
