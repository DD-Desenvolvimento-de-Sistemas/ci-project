const {
  sum,
  division,
  multiplication,
  potentiation,
  subtraction,
} = require("./index");


test("adds 10 + 2 to equal 12", () => {
  expect(sum(10, 2)).toBe(12);
});

test("subtract 10 - 2 to equal 8", () => {
  expect(subtraction(10, 2)).toBe(8);
});

test("divide 10 / 2 to equal 5", () => {
  expect(division(10, 2)).toBe(5);
});

test("multiply 10 * 2 to equal 20", () => {
  expect(multiplication(10, 2)).toBe(20);
});

test("make 10^2 to equal 100", () => {
  expect(potentiation(10, 2)).toBe(100);
});