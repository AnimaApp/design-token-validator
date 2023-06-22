import { isRootException } from "../isRootException.js";

describe("isRootException", () => {
  it("passes if value contains a type", () => {
    const isValid = isRootException({ $type: "dimension" }, true);

    expect(isValid).toBe(true);
  });

  it("fails if token is not the root", () => {
    const isValid = isRootException({ $type: "dimension" }, false);

    expect(isValid).toBe(false);
  });

  it("fails if token does not contain a type", () => {
    const isValid = isRootException({ $value: "dimension" }, true);

    expect(isValid).toBe(false);
  });
});
