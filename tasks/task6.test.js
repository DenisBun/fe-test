const Circle = require("./task6");

describe("Circle", () => {
  test("calculates area properly", () => {
    const circle = new Circle(11)
    expect(circle.getArea()).toBe(380.132711084365);
  });
  test("calculates perimeter properly", () => {
    const circle = new Circle(4.44)
    expect(circle.getArea()).toBe(27.897342763877365);
  });
});
