import { describe, it, expect } from "vitest";
import { getTokenType } from "./getTokenType.js";
import { Token, TokenValue } from "../types.js";

const context = {
  messages: [],
  tokens: {},
};

describe("getTokenType", () => {
  it("returns a tokens type", () => {
    const token: TokenValue = {
      $type: "color",
      $value: "#fff",
    };

    expect(getTokenType(token, context)).toBe("color");
  });

  it("returns undefined and adds an error message if type does not exist", () => {
    const token: any = {
      $value: "#fff",
    };

    expect(getTokenType(token, context)).toBeUndefined;
    expect(context.messages.length).toBe(1);
  });
});
