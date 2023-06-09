import { describe, it, expect } from "vitest";
import { base } from "./base.js";
import { Token } from "../types.js";

describe("base", () => {
  it("passes a valid token", () => {
    const token: Token = {
      "token name": {
        $value: "#fff000",
        $type: "color",
      },
    };

    const results = base(token);

    expect(results.length).toBe(0);
  });

  it("fails a token if name is a number", () => {
    const token: Token = {
      123.4: {
        $value: "#fff000",
        $type: "color",
      },
    };

    const results = base(token);

    expect(results.length).toBe(1);
  });

  it("fails a token if name begins with $", () => {
    const token: Token = {
      "$token name": {
        $value: "#fff000",
        $type: "color",
      },
    };

    const results = base(token);

    expect(results.length).toBe(1);
  });

  it("fails a token if name includes {", () => {
    const token: Token = {
      "t{oken name": {
        $value: "#fff000",
        $type: "color",
      },
    };

    const results = base(token);

    expect(results.length).toBe(1);
  });

  it("fails a token if name includes }", () => {
    const token: Token = {
      "t}oken name": {
        $value: "#fff000",
        $type: "color",
      },
    };

    const results = base(token);

    expect(results.length).toBe(1);
  });

  it("fails a token if name includes .", () => {
    const token: Token = {
      "t}oken name": {
        $value: "#fff000",
        $type: "color",
      },
    };

    const results = base(token);

    expect(results.length).toBe(1);
  });

  it("fails a token if no value is present", () => {
    const token: any = {
      "token name": {
        $type: "color",
      },
    };

    const results = base(token);

    expect(results.length).toBe(1);
  });
});
