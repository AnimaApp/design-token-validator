import { isGroup } from "../isGroup.js";
import { Token, TokenGroup } from "../../types.js";

describe("isGroup", () => {
  it("returns true if token is a group", () => {
    const tokenGroup: TokenGroup = {
      "token group": {
        token: {
          $value: "2rem",
          $type: "dimension",
        },
        "token group": {
          "token tres": {
            $value: "Helvetica",
            $type: "fontFamily",
          },
          "Token cuatro": {
            $value: "bold",
            $type: "fontWeight",
          },
        },
      },
    };

    expect(isGroup(tokenGroup)).toBe(true);
  });

  it("returns false if token is not a group", () => {
    const token: Token = {
      "token dos": {
        $value: "2rem",
        $type: "dimension",
      },
    };

    expect(isGroup(token)).toBe(false);
  });

  it("returns true if token is a group with a type", () => {
    const tokenGroup: TokenGroup = {
      "token group": {
        $type: "border",
        token: {
          $value: "2rem",
          $type: "dimension",
        },
      },
    };

    expect(isGroup(tokenGroup)).toBe(true);
  });

  it("returns false for empty groups", () => {
    const tokenGroup: TokenGroup = {
      "token group": {},
    };

    expect(isGroup(tokenGroup)).toBe(false);

    const tokenGroup2: TokenGroup = {
      "token group": {
        $type: "border",
      },
    };

    expect(isGroup(tokenGroup2)).toBe(false);
  });
});
