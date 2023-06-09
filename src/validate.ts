// take a token and return results

import { isGroup } from "./guards/isGroup.js";
import { Results, Tokens } from "./types.js";

export const validate = (tokens: Tokens): Results => {
  // check is group

  if (isGroup({})) {
    // validate group
    // call validate
  }
  // TODO: recursive function to walk the tree

  // if token is group, then validate the group and go a level deeper
  // if token is not a group than validate the token

  return [];
};
