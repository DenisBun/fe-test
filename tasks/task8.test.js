const sortIt = require("./task8");

describe("sortIt", () => {
  test("calculates properly 1", () => {
    const arr = [4, 1, 3];
    expect(sortIt(arr)).toBe([1, 3, 4]);
  });
  test("calculates properly 2", () => {
    const arr = [[4], [1], [3]];
    expect(sortIt(arr)).toBe([[1], [3], [4]]);
  });
  test("calculates properly 3", () => {
    const arr = [4, [1], 3];
    expect(sortIt(arr)).toBe([[1], 3, 4]);
  });
  test("calculates properly 4", () => {
    const arr = [[4], 1, [3]];
    expect(sortIt(arr)).toBe([1, [3], [4]]);
  });
  test("calculates properly 5", () => {
    const arr = [[3], 4, [2], [5], 1, 6];
    expect(sortIt(arr)).toBe([1, [2], [3], 4, [5], 6]);
  });
});
