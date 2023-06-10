import { validateDuration } from "../duration.js";

const context = {
  messages: [],
  tokens: {},
};

describe("duration", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("validates valid duration values", () => {
    expect(validateDuration("200ms", context)).toBe(true);
    expect(validateDuration("0.5ms", context)).toBe(true);

    expect(context.messages.length).toBe(0);
  });

  it("adds error for invalid duration values", () => {
    expect(validateDuration("200s" as any, context)).toBe(false);
    expect(validateDuration("0" as any, context)).toBe(false);

    expect(context.messages.length).toBe(2);
  });
});
