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
  "alias-1": {
    $value: "{alias-2}",
  },
  "alias-2": {
    $value: "{alias-1}",
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

  it("appends error if alias resoles to a circular reference alias", () => {
    const aliasName = { $value: "{alias-1}" };
    const aliasToken = resolveValue(aliasName, context);

    expect(aliasToken).toBe(undefined);
  });
});
