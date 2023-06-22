import { VisitorFunctions, walk } from "../walk.js";

describe("walk", () => {
  it("visits the correct nodes", () => {
    const res = {
      tokenCount: 0,
      groupCount: 0,
    };

    const visitorFunctions: VisitorFunctions = {
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
              $value: "bold",
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

  it("correctly calculates the path", () => {
    let path: any[] = [];

    const visitorFunctions: VisitorFunctions = {
      group: (_, updatedPath) => {
        path = [...updatedPath];
      },
      token: (_, updatedPath) => {
        path = [...updatedPath];
      },
    };

    const tokens: any = {
      "token group": {
        token: {
          $value: "2rem",
          $type: "dimension",
        },
        "token group two": {
          $type: "fontFamily",
          "token tres": {
            $value: "Helvetica",
          },
          "nested group": {
            "Token cuatro": {
              $value: "bold",
              $type: "fontWeight",
            },
          },
        },
      },
    };

    walk(tokens, visitorFunctions);

    expect(path).toEqual([
      { name: "root" },
      { name: "token group" },
      { name: "token group two", type: "fontFamily" },
      { name: "nested group" },
      { name: "Token cuatro", type: "fontWeight" },
    ]);
  });
});
