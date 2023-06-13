import { Context } from "./validate.js";

export const getTestContext = ({
  tokens = {},
  groups = [],
  tokenPath = "",
}: any): any => {
  const context: Context = {
    messages: [],
    tokens,
    report(message: any) {
      this.messages.push(message);
    },
    groups,
    tokenPath,
  };

  return context;
};
