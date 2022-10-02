const compact = require("./task9");

describe("compact", () => {
  test("calculates properly 1", () => {
    const arr = [0, 1, false, 2, "", 3]
    expect(compact(arr)).toBe([1, 2, 3]);
  });
  test("calculates properly 2", () => {
    const arr = []
    expect(compact(arr)).toBe([]);
  });
  test("calculates properly 3", () => {
    const arr = [5, true, [], {}, 32]
    expect(compact(arr)).toBe([5, true, [], {}, 32]);
  });
});
