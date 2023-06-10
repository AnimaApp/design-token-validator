import { validateColor } from "./color.js";

const context = {
  messages: [],
  tokens: {},
};

describe("validateColor", () => {
  it("validates valid hex values", () => {
    const hex1 = "#aaaaaa";
    expect(validateColor(hex1, context)).toBe(true);

    const hex2 = "#aaaaaaaa";
    expect(validateColor(hex2, context)).toBe(true);

    expect(context.messages.length).toBe(0);
  });

  it("adds error for invalid hex values", () => {
    const hex3 = "#30kd93";
    expect(validateColor(hex3, context)).toBe(false);

    const hex4 = "#33aa";
    expect(validateColor(hex4, context)).toBe(false);

    const hex5 = "333aaa";
    expect(validateColor(hex5, context)).toBe(false);

    expect(context.messages.length).toBe(3);
  });
});
