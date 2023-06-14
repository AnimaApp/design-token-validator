import { formatMessages } from "../formatMessages.js";

describe("formatMessages", () => {
  it("groups array that share the same key", () => {
    const res = formatMessages([
      {
        key: "empty-gradient",
        label: "123",
        message: "Good message 1",
        reference: "asd",
      },
      {
        key: "empty-gradient",
        label: "123",
        message: "Good message 2",
        reference: "asd",
      },
      {
        key: "invalid-color",
        label: "123",
        message: "Bad message",
        reference: "asd",
      },
    ]);

    expect(res).toEqual({
      "empty-gradient": {
        key: "empty-gradient",
        label: "123",
        messages: ["Good message 1", "Good message 2"],
        reference: "asd",
      },
      "invalid-color": {
        key: "invalid-color",
        label: "123",
        messages: ["Bad message"],
        reference: "asd",
      },
    });
  });
});
