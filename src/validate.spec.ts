import { describe, it, expect } from "vitest";
import { validate } from "./validate.js";
import { Tokens } from "./types.js";

describe("validate", () => {
  it("returns an empty array if design tokens are valid", () => {
    const tokens: Tokens = {
      "token name": {
        $value: "#fff000",
        $type: "color",
      },
    };

    const results = validate(tokens);

    expect(results.length).toBe(0);
  });

  it("returns error messages if design tokens contains in invalid token", () => {
    const tokens: any = {
      "token name": {
        $type: "color",
      },
    };

    const results = validate(tokens);

    expect(results.length).toBe(1);
  });
});
