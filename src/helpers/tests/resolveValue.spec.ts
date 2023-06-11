import { resolveValue } from "../resolveValue.js";

const context = {
  messages: [],
  tokens: {
    "white": {
      $type: "color",
      $value: "#ffffff",
    },
    "white alias": {
      $value: "{white}",
    },
    "double white alias": {
      $value: "{white alias}",
    }
  },
};

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
});
