const calculateTotalStockBooksPrice = require("./task1");

describe("calculateTotalStockBooksPrice", () => {
  test("calculates properly 1", () => {
    const books = [
      {
        price: 205,
        title: "The Road Ahead",
        readingStatus: true,
        inStock: true,
      },
      {
        author: "Steve Jobs",
        price: 111,
        title: "Walter Isaacson",
        readingStatus: true,
        inStock: false,
      },
      {
        author: "Suzanne Collins",
        price: 47,
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
        inStock: true,
      },
    ];

    expect(calculateTotalStockBooksPrice(books)).toBe(252);
  });
  test("calculates properly 2", () => {
    const books = [
      {
        price: 205,
        title: "The Road Ahead",
        readingStatus: true,
        inStock: false,
      },
      {
        author: "Steve Jobs",
        price: 111,
        title: "Walter Isaacson",
        readingStatus: true,
        inStock: false,
      },
      {
        author: "Suzanne Collins",
        price: 47,
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
        inStock: false,
      },
    ];

    expect(calculateTotalStockBooksPrice(books)).toBe(0);
  });

  test("calculates properly 2", () => {
    const books = [
    ];

    expect(calculateTotalStockBooksPrice(books)).toBe(0);
  });
});
