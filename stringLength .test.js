const stringLength = require('./stringLength.js');

test('The function should return the length of a string', () => {
  expect(stringLength('Reggie')).toBe(6);
});

test('The function should return the length of a string ', () => {
  expect(stringLength('good life')).toBe(8);
});

test('the string length should be 1-10 ', () => {
  expect(stringLength('good life')).toBeGreaterThan(1);
  expect(stringLength('good life')).toBeLessThan(10);
});