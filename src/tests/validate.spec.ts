import { validate } from "../validate.js";
import { Tokens } from "../types.js";
import exampleTokens from "../tokens/example.json";

describe("validate", () => {
  it("returns an empty array if design tokens are valid", () => {
    const tokens: Tokens = {
      "color token": {
        $value: "#fff000",
        $type: "color",
      },
      "dimension token": {
        $value: "2rem",
        $type: "dimension",
      },
      "font family token": {
        $value: ["Helvetica", "Arial", "sans-serif"],
        $type: "fontFamily",
      },
      "font weight token": {
        $value: 400,
        $type: "fontWeight",
      },
      "duration token": {
        $value: "200ms",
        $type: "duration",
      },
      "bezier token": {
        $value: [0.25, 0.1, 0.25, 1.0],
        $type: "cubicBezier",
      },
      "number token": {
        $value: 10000,
        $type: "number",
      },
      "alias token": {
        $value: "{number token}",
      },
      "double alias": {
        $value: "{alias token}",
      },
      "stroke style token": {
        $value: {
          dashArray: ["100rem", "2rem"],
          lineCap: "round",
        },
        $type: "strokeStyle",
      },
      "border token": {
        $value: {
          color: "#fff000",
          width: "1rem",
          style: "solid",
        },
        $type: "border",
      },
      "transition token": {
        $value: {
          delay: "10ms",
          duration: "100ms",
          timingFunction: [1, 2, 0.5, 20],
        },
        $type: "transition",
      },
      "shadow token": {
        $value: {
          color: "#ff00ddaa",
          offsetX: "10px",
          offsetY: "10px",
          blur: "10px",
          spread: "10px",
        },
        $type: "shadow",
      },
      "gradient token": {
        $value: [
          {
            color: "#fff000",
            position: 0,
          },
        ],
        $type: "gradient",
      },
      "typography token": {
        $value: {
          fontFamily: ["Helvetica", "Arial", "sans-serif"],
          fontWeight: 400,
          fontSize: "2rem",
          lineHeight: 2,
          letterSpacing: "2rem",
        },
        $type: "typography",
      },
      group: {
        $type: "color",
        "color token": {
          $value: "#fff000",
        },
      },
    };

    const results = validate(tokens);

    expect(Object.values(results).length).toBe(0);
  });

  it("returns error messages for the example file token", () => {
    const results = validate(exampleTokens as any);

    expect(Object.values(results).length).toBe(3);
  });

  it("returns error messages if design tokens contains in invalid token", () => {
    const tokens: any = {
      "token name": {
        $type: "color",
      },
    };

    const results = validate(tokens);

    expect(Object.values(results).length).toBe(1);
  });

  it("returns error messages if design tokens do not contain a $value", () => {
    const tokens: any = {
      global: {
        green: {
          "600-100": {
            value: "#071926",
            type: "color",
          },
        },
      },
    };

    const res = validate(tokens);

    expect(Object.values(res).length).toBe(1);
  });

  it("returns an error if alias does not resolve", () => {
    const tokens: any = {
      "600-100": {
        $value: "{global.green.600-100}",
        $type: "color",
      },
    };

    const res = validate(tokens);

    expect(Object.values(res).length).toBe(1);
  });

  it("handles top level $type", () => {
    const tokens: any = {
      $type: "color",
      "example-token": {
        $value: "#123456",
      },
    };

    const results = validate(tokens);

    expect(Object.values(results).length).toBe(0);
  });
});
