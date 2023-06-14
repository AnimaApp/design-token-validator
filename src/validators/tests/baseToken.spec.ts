import { validateBaseToken } from "../baseToken.js";
import { Token } from "../../types.js";
import { getTestContext } from "../../testUtils.js";

const context = getTestContext({});

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

  it("fails if a token does not have $value", () => {
    const token: any = {
      "token name": {
        value: "#fff000",
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

  it("fails if token name is falsy", () => {
    const token: any = {
      "": {
        $type: "color",
        $value: "#fff000",
      },
    };

    validateBaseToken(token, context);

    expect(context.messages.length).toBe(1);
  });
});
