import getBudgetObject from './7-getBudgetObject';

describe('getBudgetObject', () => {
    it('should return an object with the correct budget values', () => {
        const income = 100000;
        const gdp = 500000;
        const capita = 1000;

        const budgetObject = getBudgetObject(income, gdp, capita);

        expect(budgetObject).toEqual({
            income: 100000,
            gdp: 500000,
            capita: 1000,
        });
    });
});
