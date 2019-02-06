const add = require('./index');

test('Add Function as Expected', () =>
{
	expect(add(1, 2)).toBe(3); // Function as is expected
});

test('Add Function With a 0', () =>
{
	expect(add(3,0)).toBe(3);
});

test('Add Function With Decimals', () =>
{
	expect(add(2.7, 1.4)).toBeCloseTo(4.1);
});

test('Add Function With Negatives', () =>
{
	expect(add(-5, 12)).toBe(7);
});

test('Add Function With One Argument \n Result: Added to Default (0)', () =>
{
	expect(add(4)).toBe(4);
});

test('Add Function With No Arguments \n Result: Two Defaults (0)', () =>
{
	expect(add()).toBe(0);
});

test('Add Function With Too Many Arguments \n Result: Only First 2 Arguments Used', () =>
{
	expect(add(5,3,1)).toBe(8);
});

test('Add Function With A String \n Result: NaN', () =>
{
	expect(add('a string', 2)).toBe(NaN);
});

test('Add Function With A Bool \n Result: NaN', () =>
{
	expect(add(true, 5)).toBe(NaN);
});

test('Add Function With An Object \n Result: NaN', () =>
{
	var car = {make:"Tesla", model:"Roadster", year:2020, miles:2745, founderSeries:false, value:200000}
	expect(add(car, 10)).toBe(NaN);
});