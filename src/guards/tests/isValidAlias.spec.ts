import { isValidAlias } from "../isValidAlias.js";

describe("isValidAlias", () => {
  it("returns true if value is a valid alias", () => {
    expect(isValidAlias("{this is an alias}")).toBe(true);
  });

  it("returns false if value is an invalid alias", () => {
    expect(isValidAlias("this is an alias}")).toBe(false);
    expect(isValidAlias("{this is an alias")).toBe(false);
    expect(isValidAlias(".{this is an alias}")).toBe(false);
    expect(isValidAlias("this {is a}n alias")).toBe(false);
  });
});
