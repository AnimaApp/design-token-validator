import { validate } from "../validate.js";
import { Tokens } from "../types.js";

describe("validate", () => {
  it("returns an empty array if design tokens are valid", () => {
    const tokens: Tokens = {
      "color token": {
        $value: "#fff000",
        $type: "color",
      },
      "dimension token": {
        $value: "2rem",
        $type: "dimension",
      },
      "font family token": {
        $value: ["Helvetica", "Arial", "sans-serif"],
        $type: "fontFamily",
      },
      "font weight token": {
        $value: 400,
        $type: "fontWeight",
      },
      "duration token": {
        $value: "200ms",
        $type: "duration",
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
