import { GroupPath } from "../walk.js";

export const getTokenPath = (path: GroupPath[]) =>
  path.map(({ name }) => name).join(".");
