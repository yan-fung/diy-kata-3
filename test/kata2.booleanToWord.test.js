const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns yes if the value is true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });
});

describe("booleanToWord", () => {
  it("returns no if the value is false", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
