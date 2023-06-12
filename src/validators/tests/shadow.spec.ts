import { getTestContext } from "../../testUtils.js";
import { validateShadow } from "../shadow.js";

const context = getTestContext({});

describe("validateShadow", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("validates a valid shadow value", () => {
    const validShadow = {
      offsetX: "10px",
      offsetY: "10px",
      blur: "10px",
      spread: "10px",
      color: "#000000",
    };

    expect(validateShadow(validShadow, context)).toBe(true);

    expect(context.messages.length).toBe(0);
  });

  it("adds error for invalid shadow value", () => {
    const invalidColor = {
      offsetX: "10px",
      offsetY: "10px",
      blur: "10px",
      spread: "10px",
      color: "red",
    };

    expect(validateShadow(invalidColor, context)).toBe(false);

    const invalidDimension = {
      offsetX: "10px",
      offsetY: "10px",
      blur: "10px",
      spread: "10px",
      color: "red",
    };

    expect(validateShadow(invalidDimension, context)).toBe(false);

    const missingProperty: any = {
      offsetX: "10px",
      offsetY: "10px",
      spread: "10px",
      color: "red",
    };

    expect(validateShadow(missingProperty, context)).toBe(false);

    expect(context.messages.length).toBe(3);
  });
});
