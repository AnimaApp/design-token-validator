import { getTestContext } from "../../testUtils.js";
import { validateNumber } from "../number.js";

const context = getTestContext({});

describe("validateNumber", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("validates valid number values", () => {
    expect(validateNumber(1, context)).toBe(true);
    expect(validateNumber(-1, context)).toBe(true);
    expect(validateNumber(123, context)).toBe(true);
    expect(validateNumber(0.5, context)).toBe(true);
    expect(validateNumber(0, context)).toBe(true);

    expect(context.messages.length).toBe(0);
  });

  it("adds error for invalid number values", () => {
    expect(validateNumber(NaN, context)).toBe(false);
    expect(validateNumber(Infinity, context)).toBe(false);
    expect(validateNumber("123" as any, context)).toBe(false);

    expect(context.messages.length).toBe(3);
  });
});
