import getFullBudgetObject from './9-getFullBudget.js';

describe('getFullBudgetObject', () => {
    test('should return a full budget object with income in dollars and euros', () => {
        const income = 50000;
        const gdp = 1000000;
        const capita = 5000;

        const expected = {
            income: 50000,
            gdp: 1000000,
            capita: 5000,
            getIncomeInDollars: expect.any(Function),
            getIncomeInEuros: expect.any(Function),
        };

        const result = getFullBudgetObject(income, gdp, capita);

        expect(result).toEqual(expected);
        expect(result.getIncomeInDollars(income)).toBe('$50000');
        expect(result.getIncomeInEuros(income)).toBe('50000 euros');
    });
});
