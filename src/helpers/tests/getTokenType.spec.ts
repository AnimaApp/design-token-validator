import { getTokenType } from "../getTokenType.js";
import { TokenValue } from "../../types.js";
import { getTestContext } from "../../testUtils.js";

const context = getTestContext({
  tokenPath: "group.nested group.color",
  groups: [
    {
      name: "group",
      type: "color",
    },
    {
      name: "nested group",
    },
    {
      name: "color",
    },
  ],
  tokens: {
    group: {
      $type: "color",
      "nested group": {
        color: {
          $value: "#ffffff",
        },
      },
    },
  },
});

describe("getTokenType", () => {
  it("returns a tokens type", () => {
    const token: TokenValue = {
      $type: "color",
      $value: "#fff",
    };

    expect(getTokenType(token, context)).toBe("color");
  });

  it("returns undefined and adds an error message if type does not exist", () => {
    const token: any = {
      $value: "#fff",
    };

    const badContext = getTestContext({})

    expect(getTokenType(token, badContext)).toBeUndefined();

    expect(badContext.messages.length).toBe(1);
  });

  it("returns the closest group type if the token does not have a type", () => {
    const token: any = {
      $value: "#ffffff",
    };

    expect(getTokenType(token, context)).toBe("color");
  });
});
