import { getClosestGroupType } from "../getClosestGroupType.js";

const context = {
  messages: [],
  tokens: {},
};

describe("getClosestGroupType", () => {
  beforeEach(() => {
    context.messages = [];
  });

  it("returns the type of the closest group", () => {
    const path1 = [
      { name: "1234", type: "color" },
      { name: "2345", type: "fontFamily" },
    ];

    expect(getClosestGroupType(path1, context)).toBe("fontFamily");

    const path2 = [{ name: "1234", type: "color" }, { name: "2345" }];

    expect(getClosestGroupType(path2, context)).toBe("color");
  });

  it("returns an empty string if the closest group does not have a type", () => {
    const path = [{ name: "1234" }, { name: "2345" }];

    expect(getClosestGroupType(path, context)).toBe("");
    expect(context.messages.length).toBe(1);
  });
});
