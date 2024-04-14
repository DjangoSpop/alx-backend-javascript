import getBudgetForCurrentYear from './8-getBudgetCurrentYear';

describe('getBudgetForCurrentYear', () => {
    it('should calculate the budget for the current year correctly', () => {
        const income = 1000000;
        const gdp = 5000000;
        const capita = 1000;
        const expectedBudget = 1000000 + 5000000 + 1000;
        const budget = getBudgetForCurrentYear(income, gdp, capita);
        expect(budget).toEqual(expectedBudget);
    });

    it('should handle negative values correctly', () => {
        const income = -1000000;
        const gdp = -5000000;
        const capita = -1000;
        const expectedBudget = -1000000 - 5000000 - 1000;
        const budget = getBudgetForCurrentYear(income, gdp, capita);
        expect(budget).toEqual(expectedBudget);
    });

    it('should handle zero values correctly', () => {
        const income = 0;
        const gdp = 0;
        const capita = 0;
        const expectedBudget = 0;
        const budget = getBudgetForCurrentYear(income, gdp, capita);
        expect(budget).toEqual(expectedBudget);
    });
});
