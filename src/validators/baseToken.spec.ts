import { validateBaseToken } from "./baseToken.js";
import { Token } from "../types.js";

const context = {
  tokens: {},
  messages: [],
};

describe("validateBaseToken ", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("passes a valid token", () => {
    const token: Token = {
      "token name": {
        $value: "#fff000",
        $type: "color",
      },
    };

    validateBaseToken(token, context);

    expect(context.messages.length).toBe(0);
  });

  it("fails a token if name is a number", () => {
    const token: Token = {
      123.4: {
        $value: "#fff000",
        $type: "color",
      },
    };

    validateBaseToken(token, context);

    expect(context.messages.length).toBe(1);
  });

  it("fails a token if name begins with $", () => {
    const token: Token = {
      "$token name": {
        $value: "#fff000",
        $type: "color",
      },
    };

    validateBaseToken(token, context);

    expect(context.messages.length).toBe(1);
  });

  it("fails a token if name includes {", () => {
    const token: Token = {
      "t{oken name": {
        $value: "#fff000",
        $type: "color",
      },
    };

    validateBaseToken(token, context);

    expect(context.messages.length).toBe(1);
  });

  it("fails a token if name includes }", () => {
    const token: Token = {
      "t}oken name": {
        $value: "#fff000",
        $type: "color",
      },
    };

    validateBaseToken(token, context);

    expect(context.messages.length).toBe(1);
  });

  it("fails a token if name includes .", () => {
    const token: Token = {
      "t}oken name": {
        $value: "#fff000",
        $type: "color",
      },
    };

    validateBaseToken(token, context);

    expect(context.messages.length).toBe(1);
  });

  it("fails a token if no value is present", () => {
    const token: any = {
      "token name": {
        $type: "color",
      },
    };

    validateBaseToken(token, context);

    expect(context.messages.length).toBe(1);
  });
});
