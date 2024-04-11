import getBudgetForCurrentYear from './8-getBudgetCurrentYear';

// Test case 1: Valid input
test('Test case 1: Valid input', () => {
    const income = 1000000;
    const gdp = 5000000;
    const capita = 1000;
    const expected = 5500000;
    const result = getBudgetForCurrentYear(income, gdp, capita);
    expect(result).toBe(expected);
});

// Test case 2: Zero income
test('Test case 2: Zero income', () => {
    const income = 0;
    const gdp = 5000000;
    const capita = 1000;
    const expected = 5000000;
    const result = getBudgetForCurrentYear(income, gdp, capita);
    expect(result).toBe(expected);
});

// Test case 3: Negative gdp
test('Test case 3: Negative gdp', () => {
    const income = 1000000;
    const gdp = -5000000;
    const capita = 1000;
    const expected = -4000000;
    const result = getBudgetForCurrentYear(income, gdp, capita);
    expect(result).toBe(expected);
});

// Test case 4: Zero capita
test('Test case 4: Zero capita', () => {
    const income = 1000000;
    const gdp = 5000000;
    const capita = 0;
    const expected = 5000000;
    const result = getBudgetForCurrentYear(income, gdp, capita);
    expect(result).toBe(expected);
});

// Test case 5: Negative income, gdp, and capita
test('Test case 5: Negative income, gdp, and capita', () => {
    const income = -1000000;
    const gdp = -5000000;
    const capita = -1000;
    const expected = -7000000;
    const result = getBudgetForCurrentYear(income, gdp, capita);
    expect(result).toBe(expected);
});
