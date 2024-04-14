import getSumOfHoods from './path/to/getSumOfHoods.js';

describe('getSumOfHoods', () => {
  it('should return the sum of initialNumber and default expansions', () => {
    const result = getSumOfHoods(10);
    expect(result).toBe(118);
  });

  it('should return the sum of initialNumber and provided expansions', () => {
    const result = getSumOfHoods(10, 100, 200);
    expect(result).toBe(310);
  });

  it('should return the sum of initialNumber and default expansions when no expansions are provided', () => {
    const result = getSumOfHoods(10, undefined, undefined);
    expect(result).toBe(118);
  });
});
