import { getTestContext } from "../../testUtils.js";
import { validateTransition } from "../transition.js";

const context = getTestContext({});

describe("validateTransition", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("validates a valid transition value", () => {
    const validTransition: any = {
      delay: "10ms",
      duration: "100ms",
      timingFunction: [1, 2, 0.5, 20],
    };

    expect(validateTransition(validTransition, context)).toBe(true);

    expect(context.messages.length).toBe(0);
  });

  it("appends error to messages and returns false for invalid transition value", () => {
    const invalidDelay: any = {
      delay: "10m",
      duration: "100ms",
      timingFunction: [1, 2, 0.5, 20],
    } as const;

    expect(validateTransition(invalidDelay, context)).toBe(false);

    const invalidDuration: any = {
      delay: "10ms",
      duration: 100,
      timingFunction: [1, 2, 0.5, 20],
    };

    expect(validateTransition(invalidDuration, context)).toBe(false);

    const invalidTimingFunction: any = {
      delay: "10ms",
      duration: "100ms",
      timingFunction: [100, 2, 0.5, 20],
    };
    expect(validateTransition(invalidTimingFunction, context)).toBe(false);

    const missingProperty: any = {
      delay: "10ms",
      duration: "100ms",
    };
    expect(validateTransition(missingProperty, context)).toBe(false);

    expect(context.messages.length).toBe(4);
  });
});
