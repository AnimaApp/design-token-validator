import { getTestContext } from "../../testUtils.js";
import { validateFontWeight } from "../fontWeight.js";

const context = getTestContext({});

describe("validateFontWeight", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("validates a valid font weight", () => {
    expect(validateFontWeight(500, context)).toBe(true);
    expect(validateFontWeight("bold", context)).toBe(true);
    expect(validateFontWeight(1, context)).toBe(true);
    expect(validateFontWeight(1000, context)).toBe(true);
    expect(validateFontWeight("demi-bold", context)).toBe(true);
  });

  it("adds error for invalid font weight", () => {
    expect(validateFontWeight(0, context)).toBe(false);
    expect(validateFontWeight(1001, context)).toBe(false);
    expect(validateFontWeight("akakaka" as any, context)).toBe(false);
    expect(validateFontWeight("boold" as any, context)).toBe(false);
    expect(validateFontWeight(["demi-bold"] as any, context)).toBe(false);

    expect(context.messages.length).toBe(5);
  });
});
