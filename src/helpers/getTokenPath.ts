import { GroupPath } from "../walk.js";

export const getTokenPath = (path: GroupPath[]) => {
  const pathWithRemovedRoot = path.slice(1);

  return pathWithRemovedRoot.map(({ name }) => name).join(".");
};
