import { describe, it, expect } from "vitest";
import { isGroup } from "./isGroup.js";
import { TokenGroup, Tokens } from "../types.js";

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
            $value: "strong",
            $type: "fontWeight",
          },
        },
      },
    };

    expect(isGroup(tokenGroup)).toBe(true);
  });

  it("returns false if token is not a group", () => {
    const token: Tokens = {
      "token dos": {
        $value: "2rem",
        $type: "dimension",
      },
    };

    expect(isGroup(token)).toBe(false);
  });
});
