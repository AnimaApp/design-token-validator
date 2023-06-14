import { getTestContext } from "../../testUtils.js";
import { validateTypography } from "../typography.js";

const context = getTestContext({});

describe("validateTypography", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("validates a valid typography value", () => {
    const validTypography = {
      fontFamily: "Helvetica",
      fontSize: "12px",
      fontWeight: "bold",
      lineHeight: 1.5,
      letterSpacing: "1px",
    } as const;

    expect(validateTypography(validTypography, context)).toBe(true);

    expect(context.messages.length).toBe(0);
  });

  it("adds error for invalid typography value", () => {
    const incorrectFontFamily: any = {
      fontFamily: [],
      fontSize: "12px",
      fontWeight: "bold",
      lineHeight: 1.5,
      letterSpacing: "1px",
    };

    expect(validateTypography(incorrectFontFamily, context)).toBe(false);

    const missingProperties: any = {
      fontFamily: [],
      letterSpacing: "1px",
    };
    expect(validateTypography(missingProperties, context)).toBe(false);

    expect(context.messages.length).toBe(5);
  });
});
