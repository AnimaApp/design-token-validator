import { getTestContext } from "../../testUtils.js";
import { validateGradient } from "../gradient.js";

const context = getTestContext({});

describe("validateGradient", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("validates a valid gradient value", () => {
    const validGradient = [
      {
        color: "#0000ff",
        position: 0,
      },
      {
        color: "#ff0000",
        position: 1,
      },
    ];

    expect(validateGradient(validGradient, context)).toBe(true);
  });

  it("appends error to messages and returns false for invalid gradient value", () => {
    const emptyGradient: any = [];

    expect(validateGradient(emptyGradient, context)).toBe(false);

    const invalidColor = [
      {
        color: "red",
        position: 0,
      },
    ];

    expect(validateGradient(invalidColor, context)).toBe(false);

    const invalidNumber: any = [
      {
        color: "#fff000",
        position: "22",
      },
    ];

    expect(validateGradient(invalidNumber, context)).toBe(false);

    expect(context.messages.length).toBe(3);
  });
});
