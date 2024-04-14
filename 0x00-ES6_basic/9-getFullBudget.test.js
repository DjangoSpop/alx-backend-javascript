import getFullBudgetObject from './9-getFullBudget';

describe('getFullBudgetObject', () => {
    it('should return a budget object with the correct values', () => {
        const income = 100000;
        const gdp = 500000;
        const capita = 1000;

        const expectedBudgetObject = {
            income: 100000,
            gdp: 500000,
            capita: 1000,
        };

        const result = getFullBudgetObject(income, gdp, capita);

        expect(result).toEqual(expectedBudgetObject);
    });
});
