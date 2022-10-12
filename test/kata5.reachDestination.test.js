const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual(4.5);
    expect(reachDestination(67, 20)).toEqual(3.5);
  });
});
