import { getTestContext } from "../../testUtils.js";
import { validateCubicBezier } from "../cubicBezier.js";

const context = getTestContext({});

describe("validateCubicBezier", () => {
  it("validates valid cubicBezier values", () => {
    expect(validateCubicBezier([0, 0, 1, 1], context)).toBe(true);
    expect(validateCubicBezier([0.5, 0.5, 0.5, 0.5], context)).toBe(true);
    expect(validateCubicBezier([0.5, 100, 0.5, -200], context)).toBe(true);

    expect(context.messages.length).toBe(0);
  });

  it("adds error for invalid cubicBezier values", () => {
    expect(validateCubicBezier([0, 0, 1] as any, context)).toBe(false);
    expect(validateCubicBezier([0, 0, 1, 1, 1] as any, context)).toBe(false);
    expect(validateCubicBezier([0, 0, 100, 1], context)).toBe(false);
    expect(validateCubicBezier([-200, 0, 100, 1], context)).toBe(false);

    expect(context.messages.length).toBe(4);
  });
});
