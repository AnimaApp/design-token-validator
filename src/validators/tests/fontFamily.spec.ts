import { getTestContext } from "../../testUtils.js";
import { validateFontFamily } from "../fontFamily.js";

const context = getTestContext({});

describe("validateFontFamily", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("validates a valid font family", () => {
    expect(validateFontFamily("Helvetica", context)).toBe(true);
    expect(validateFontFamily(["Futura"], context)).toBe(true);
  });

  it("adds error for invalid font family", () => {
    expect(validateFontFamily([], context)).toBe(false);
    expect(validateFontFamily(1234 as any, context)).toBe(false);
    expect(validateFontFamily([123, "hey there"] as any, context)).toBe(false);

    expect(context.messages.length).toBe(3);
  });
});
