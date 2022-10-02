const arrayOfMultiples = require("./task7");

describe("arrayOfMultiples", () => {
  test("calculates properly 1", () => {
    expect(arrayOfMultiples(7, 5)).toBe([7, 14, 21, 28, 35]);
  });
  test("calculates properly 2", () => {
    expect(arrayOfMultiples(12, 10)).toBe([12, 24, 36, 48, 60, 72, 84, 96, 108, 120]);
  });
  test("calculates properly 3", () => {
    expect(arrayOfMultiples(17, 6)).toBe([17, 34, 51, 68, 85, 102]);
  });
});
