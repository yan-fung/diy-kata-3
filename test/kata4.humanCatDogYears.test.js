const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns array of human, cat and dog years when passed human years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(20)).toEqual([20, 96, 114]);
  });
});
