import { getTestContext } from "../../testUtils.js";
import { resolveValue } from "../resolveValue.js";

const tokens = {
  white: {
    $type: "color",
    $value: "#ffffff",
  },
  "white alias": {
    $value: "{white}",
  },
  "double white alias": {
    $value: "{white alias}",
  },
};

const context = getTestContext({ tokens });

describe("resolveValue", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("return the token if the token is a valid TokenValue", () => {
    const token = {
      $type: "color",
      $value: "#ffffff",
    };

    expect(resolveValue(token, context)).toEqual({
      $type: "color",
      $value: "#ffffff",
    });
  });

  it("returns the correct value if the token is a valid alias", () => {
    const token = {
      $value: "{white alias}",
    };

    expect(resolveValue(token, context)).toEqual({
      $type: "color",
      $value: "#ffffff",
    });
  });

  it("returns the correct value if the token is a valid alias", () => {
    const token = {
      $value: "{double white alias}",
    };

    expect(resolveValue(token, context)).toEqual({
      $type: "color",
      $value: "#ffffff",
    });
  });

  it("appends error if alias path does not resolve to a token", () => {
    const token = {
      $value: "{double black alias}",
    };

    expect(resolveValue(token, context)).toBeUndefined();
    expect(context.messages.length).toBe(1);
  });
});
