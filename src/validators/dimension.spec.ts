import { validateDimension } from "./dimension.js";

const context = {
  messages: [],
  tokens: {},
};

describe("dimensionValidator", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("validates a valid dimension value", () => {
    expect(validateDimension("120px", context)).toBe(true);
    expect(validateDimension("0.5rem", context)).toBe(true);
    expect(validateDimension("0rem", context)).toBe(true);

    expect(context.messages.length).toBe(0);
  });

  it("appends error to messages and returns false for invalid dimension value", () => {
    expect(validateDimension("rem", context)).toBe(false);
    expect(validateDimension("onehundredrem", context)).toBe(false);
    expect(validateDimension("400xp", context)).toBe(false);
    expect(validateDimension("0", context)).toBe(false);

    expect(context.messages.length).toBe(4);
  });
});
