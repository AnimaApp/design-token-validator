import { isValidAliasPath } from "../isValidAliasPath.js";

describe("isValidAliasPath", () => {
  it("returns true if value is a valid alias", () => {
    expect(isValidAliasPath("{this is an alias}")).toBe(true);
  });

  it("returns false if value is an invalid alias", () => {
    expect(isValidAliasPath("this is an alias}")).toBe(false);
    expect(isValidAliasPath("{this is an alias")).toBe(false);
    expect(isValidAliasPath(".{this is an alias}")).toBe(false);
    expect(isValidAliasPath("this {is a}n alias")).toBe(false);
  });
});
