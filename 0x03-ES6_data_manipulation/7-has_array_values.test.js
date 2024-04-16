import hasValuesFromArray from './7-has_array_values.js';

// Test case 1: Both set and array have values
test('hasValuesFromArray should return true when both set and array have values', () => {
    const set = new Set([1, 2, 3]);
    const array = [2, 3];
    const result = hasValuesFromArray(set, array);
    expect(result).toBe(true);
});

// Test case 2: Set is empty
test('hasValuesFromArray should return false when set is empty', () => {
    const set = new Set();
    const array = [2, 3];
    const result = hasValuesFromArray(set, array);
    expect(result).toBe(false);
});

// Test case 3: Array is empty
test('hasValuesFromArray should return true when array is empty', () => {
    const set = new Set([1, 2, 3]);
    const array = [];
    const result = hasValuesFromArray(set, array);
    expect(result).toBe(true);
});

// Test case 4: Both set and array are empty
test('hasValuesFromArray should return false when both set and array are empty', () => {
    const set = new Set();
    const array = [];
    const result = hasValuesFromArray(set, array);
    expect(result).toBe(false);
});

// Test case 5: Set has values but array does not have all the values
test('hasValuesFromArray should return false when array does not have all the values from set', () => {
    const set = new Set([1, 2, 3]);
    const array = [2, 4];
    const result = hasValuesFromArray(set, array);
    expect(result).toBe(false);
});
