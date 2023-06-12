import { getTestContext } from "../../testUtils.js";
import { getClosestGroupType } from "../getClosestGroupType.js";

const context = getTestContext({});

describe("getClosestGroupType", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("returns the type of the closest group", () => {
    context.groups = [
      { name: "1234", type: "color" },
      { name: "2345", type: "fontFamily" },
    ];

    expect(getClosestGroupType(context)).toBe("fontFamily");

    context.groups = [{ name: "1234", type: "color" }, { name: "2345" }];

    expect(getClosestGroupType(context)).toBe("color");
  });

  it("returns an empty string if the closest group does not have a type", () => {
    context.groups = [{ name: "1234" }, { name: "2345" }];

    expect(getClosestGroupType(context)).toBeUndefined;
  });
});
