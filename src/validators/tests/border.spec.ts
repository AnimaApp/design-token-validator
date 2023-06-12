import { getTestContext } from "../../testUtils.js";
import { validateBorder } from "../border.js";

const context = getTestContext({});

describe("validateBorder", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("validates a valid border value", () => {
    const validBorder = {
      color: "#fff000",
      width: "1rem",
      style: "solid",
    } as const;

    expect(validateBorder(validBorder, context)).toBe(true);

    const validBorder2: any = {
      color: "#fff000",
      width: "1px",
      style: {
        dashArray: ["0.5rem", "1rem"],
        lineCap: "butt",
      },
    };

    expect(validateBorder(validBorder2, context)).toBe(true);

    expect(context.messages.length).toBe(0);
  });

  it("appends error to messages and returns false for invalid border value", () => {
    const invalidColor = {
      color: "red",
      width: "1rem",
      style: "solid",
    } as const;

    expect(validateBorder(invalidColor, context)).toBe(false);

    const invalidDimension = {
      color: "#fff000",
      width: "1em",
      style: "solid",
    } as const;

    expect(validateBorder(invalidDimension, context)).toBe(false);

    const invalidStyle: any = {
      color: "#fff000",
      width: "1rem",
      style: "black",
    };
    expect(validateBorder(invalidStyle, context)).toBe(false);

    const missingProperty: any = {
      color: "#fff000",
      width: "1rem",
    };
    expect(validateBorder(missingProperty, context)).toBe(false);

    expect(context.messages.length).toBe(4);
  });
});
