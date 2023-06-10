import { describe, it, expect } from "vitest";
import { colorValidator } from "./color.js";

const context = {
  messages: [],
  tokens: {},
};

describe("colorValidator", () => {
  it("validates valid hex values", () => {
    const hex1 = "#aaaaaa";
    expect(colorValidator(hex1, context)).toBe(true);

    const hex2 = "#aaaaaaaa";
    expect(colorValidator(hex2, context)).toBe(true);

    expect(context.messages.length).toBe(0);
  });

  it("adds error for invalid hex values", () => {
    const hex3 = "#30kd93";
    expect(colorValidator(hex3, context)).toBe(false);

    const hex4 = "#33aa";
    expect(colorValidator(hex4, context)).toBe(false);

    const hex5 = "333aaa";
    expect(colorValidator(hex5, context)).toBe(false);

    expect(context.messages.length).toBe(3);
  });
});
