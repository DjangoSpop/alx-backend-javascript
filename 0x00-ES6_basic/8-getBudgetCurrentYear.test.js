import getBudgetForCurrentYear from './8-getBudgetCurrentYear';

describe('getBudgetForCurrentYear', () => {
    it('should return the budget for the current year', () => {
        const income = 100000;
        const gdp = 500000;
        const capita = 1000;
        const expectedBudget = {
            [`income-${new Date().getFullYear()}`]: income,
            [`gdp-${new Date().getFullYear()}`]: gdp,
            [`capita-${new Date().getFullYear()}`]: capita,
        };

        const result = getBudgetForCurrentYear(income, gdp, capita);

        expect(result).toEqual(expectedBudget);
    });
});
