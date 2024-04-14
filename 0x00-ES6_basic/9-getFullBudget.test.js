import getFullBudgetObject from './9-getFullBudget';

describe('getFullBudgetObject', () => {
    test('should return the full budget object with income in dollars and euros', () => {
        const income = 1000;
        const gdp = 5000;
        const capita = 10;

        const expected = {
            income: 1000,
            gdp: 5000,
            capita: 10,
            getIncomeInDollars: expect.any(Function),
            getIncomeInEuros: expect.any(Function),
        };

        const result = getFullBudgetObject(income, gdp, capita);

        expect(result).toEqual(expected);
        expect(result.getIncomeInDollars(income)).toBe('$1000');
        expect(result.getIncomeInEuros(income)).toBe('1000 euros');
    });
});
