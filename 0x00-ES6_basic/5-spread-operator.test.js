import concatArrays from './5-spread-operator';

// Test case 1: Concatenate two arrays
test('Concatenate two arrays', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const result = concatArrays(array1, array2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});

// Test case 2: Concatenate two arrays with a string in between
test('Concatenate two arrays with a string in between', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const result = concatArrays(array1, array2, '-');
    expect(result).toEqual([1, 2, 3, '-', 4, 5, 6]);
});

// Test case 3: Concatenate two empty arrays
test('Concatenate two empty arrays', () => {
    const array1 = [];
    const array2 = [];
    const result = concatArrays(array1, array2);
    expect(result).toEqual([]);
});
