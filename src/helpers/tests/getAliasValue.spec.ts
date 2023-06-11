import { Context } from "../../validate.js";
import { getAliasToken } from "../getAliasValue.js";

const context: Context = {
  messages: [],
  tokens: {
    "token name": {
      $type: "color",
      $value: "#ffffff",
    },
    group: {
      "nested token": {
        $type: "dimension",
        $value: "1px",
      },
      "nested group": {
        "doubly nested token": {
          $type: "fontFamily",
          $value: "Helvetica",
        },
      },
    },
  },
};

describe("getAliasValue", () => {
  it("gets a top level alias token", () => {
    const aliasName = "{token name}";

    const aliasToken = getAliasToken(aliasName, context);

    expect(aliasToken?.$type).toBe("color");
    expect(aliasToken?.$value).toBe("#ffffff");
  });

  it("get a nested alias token", () => {
    const aliasName = "{group.nested token}";

    const aliasToken = getAliasToken(aliasName, context);

    expect(aliasToken?.$type).toBe("dimension");
    expect(aliasToken?.$value).toBe("1px");
  });

  it("gets a deeply nested alias token", () => {
    const aliasName = "{group.nested group.doubly nested token}";

    const aliasToken = getAliasToken(aliasName, context);

    expect(aliasToken?.$type).toBe("fontFamily");
    expect(aliasToken?.$value).toBe("Helvetica");
  });

  it("returns undefined when an alias is not found", () => {
    const aliasName = "{non existant alias}";

    const aliasToken = getAliasToken(aliasName, context);

    expect(aliasToken).toBe(undefined)
  });

  it("returns undefined if a group key is a value", () => {
    const aliasName = "{token name.group}";

    const aliasToken = getAliasToken(aliasName, context);

    expect(aliasToken).toBe(undefined)
  });
});
