//bring the functions file here
const fizzBuzz = require("./sandbox");

test("returns 1 for the number 1", () => {
  expect(fizzBuzz(1)).toStrictEqual(1);
});

test("returns 7 for the number 7", () => {
  expect(fizzBuzz(7)).toStrictEqual(7);
});

test('returns "Fizz" for the number 3', () => {
  expect(fizzBuzz(3)).toEqual("Fizz");
});

test('returns "Fizz" for the number 9', () => {
  expect(fizzBuzz(9)).toEqual("Fizz");
});

test('returns "Buzz" for the number 5', () => {
  expect(fizzBuzz(5)).toEqual("Buzz");
});

test('returns "Buzz" for the number 10', () => {
  expect(fizzBuzz(10)).toEqual("Buzz");
});

test('returns "FizzBuzz" for the number 15', () => {
  expect(fizzBuzz(15)).toEqual("FizzBuzz");
});

test('returns "FizzBuzz" for the number 30', () => {
  expect(fizzBuzz(30)).toEqual("FizzBuzz");
});

