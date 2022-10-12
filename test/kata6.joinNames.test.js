const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const Bart = { name: "Bart" };
    const Lisa = { name: "Lisa" };
    const Maggie = { name: "Maggie" };
    const Yan = { name: "Yan" };

    expect(joinNames([Bart, Lisa, Maggie])).toEqual("Bart, Lisa & Maggie");
    expect(joinNames([Bart, Lisa, Maggie, Yan])).toEqual("Bart, Lisa, Maggie & Yan");
  });
});
