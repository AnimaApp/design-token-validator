import { walk } from "../walk.js";

describe("walk", () => {
  it("visits the correct nodes", () => {
    const res = {
      tokenCount: 0,
      groupCount: 0,
    };

    const visitorFunctions = {
      token: () => {
        res.tokenCount++;
      },
      group: () => {
        res.groupCount++;
      },
    };

    const tokens: any = {
      "token group": {
        token: {
          $value: "2rem",
          $type: "dimension",
        },
        "token group": {
          "token tres": {
            $value: "Helvetica",
            $type: "fontFamily",
          },
          "nested group": {
            "Token cuatro": {
              $value: "strong",
              $type: "fontWeight",
            },
          },
        },
      },
      "token uno": {
        $value: "2rem",
        $type: "dimension",
      },
    };

    walk(tokens, visitorFunctions);

    expect(res.tokenCount).toBe(4);
    expect(res.groupCount).toBe(3);
  });
});
