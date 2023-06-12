import { getTestContext } from "../../testUtils.js";
import { validateStrokeStyle } from "../strokeStyle.js";

const context = getTestContext({});

describe("validateStrokeStyle", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("validates valid strokeStyle string values", () => {
    expect(validateStrokeStyle("solid", context)).toBe(true);
    expect(validateStrokeStyle("dashed", context)).toBe(true);
    expect(validateStrokeStyle("dotted", context)).toBe(true);

    expect(context.messages.length).toBe(0);
  });

  it("adds error for invalid strokeStyle string values", () => {
    expect(validateStrokeStyle(1234 as any, context)).toBe(false);
    expect(validateStrokeStyle("smashed" as any, context)).toBe(false);

    expect(context.messages.length).toBe(2);
  });

  it("validates valid strokeStyle object values", () => {
    const validValue: any = {
      dashArray: ["1rem", "2rem"],
      lineCap: "round",
    };

    expect(validateStrokeStyle(validValue, context)).toBe(true);

    const additionalProperties: any = {
      dashArray: ["1rem", "2rem"],
      lineCap: "round",
      lineJoin: "round",
      lineWidth: "1rem",
    };

    expect(validateStrokeStyle(additionalProperties, context)).toBe(true);

    expect(context.messages.length).toBe(0);
  });

  it("adds error for invalid strokeStyle object values", () => {
    const missingProperty: any = {
      dashArray: ["1rem", "2rem"],
    };

    expect(validateStrokeStyle(missingProperty, context)).toBe(false);

    const invalidDashArray: any = {
      dashArray: ["1", "2rem"],
      lineCap: "round",
    };

    expect(validateStrokeStyle(invalidDashArray, context)).toBe(false);

    expect(context.messages.length).toBe(2);
  });
});
