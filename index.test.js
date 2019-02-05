const add = require('./index');

test('test adding function', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(5,0)).toBe(5);
  expect(add(3)).toBe(3);
});