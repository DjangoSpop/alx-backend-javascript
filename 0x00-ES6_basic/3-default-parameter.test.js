import getSumOfHoods from './3-default-parameter.js';

describe('getSumOfHoods', () => {
  it('should return the sum of initialNumber, expansion1989, and expansion2019', () => {
    expect(getSumOfHoods(10)).toBe(10 + 89 + 19);
    expect(getSumOfHoods(5, 100)).toBe(5 + 100 + 19);
    expect(getSumOfHoods(2, 50, 30)).toBe(2 + 50 + 30);
  });

  it('should use default values if any of the parameters are not provided', () => {
    expect(getSumOfHoods()).toBe(0 + 89 + 19);
    expect(getSumOfHoods(10, undefined, 5)).toBe(10 + 89 + 5);
    expect(getSumOfHoods(undefined, undefined, undefined)).toBe(0 + 89 + 19);
  });
});
