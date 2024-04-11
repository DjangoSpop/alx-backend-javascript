import getBudgetObject from './7-getBudgetObject';

describe('getBudgetObject', () => {
    it('should return an object with the correct properties', () => {
        const income = 100000;
        const gdp = 500000;
        const capita = 1000;

        const budgetObject = getBudgetObject(income, gdp, capita);

        expect(budgetObject).toHaveProperty('income', income);
        expect(budgetObject).toHaveProperty('gdp', gdp);
        expect(budgetObject).toHaveProperty('capita', capita);
    });

    it('should return an object with default values if no arguments are provided', () => {
        const budgetObject = getBudgetObject();

        expect(budgetObject).toHaveProperty('income', 0);
        expect(budgetObject).toHaveProperty('gdp', 0);
        expect(budgetObject).toHaveProperty('capita', 0);
    });
});
