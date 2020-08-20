import { compareIgnoreCase } from './main';

describe('compareIgnoreCase', () => {
  test('should return false when two strings are different', () => {
    expect(compareIgnoreCase('test', 'test2')).toBe(false);
  });

  test('should return false when some of params are not string type', () => {
    expect(compareIgnoreCase('2', 2)).toBe(false);
  });

  test('should return true when two strings are equal even though there are 1 param is uppercase', () => {
    expect(compareIgnoreCase('test', 'Test')).toBe(true);
  });

  test('should return true when two strings are equal', () => {
    expect(compareIgnoreCase('test', 'test')).toBe(true);
  });
});
