import concatArrays from './5-spread-operator';

// Test case 1: Concatenating two arrays
test('Concatenating two arrays', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const result = concatArrays(array1, array2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});

// Test case 2: Concatenating an array and a string
test('Concatenating an array and a string', () => {
    const array1 = [1, 2, 3];
    const string = 'hello';
    const result = concatArrays(array1, string);
    expect(result).toEqual([1, 2, 3, 'h', 'e', 'l', 'l', 'o']);
});

// Test case 3: Concatenating two empty arrays
test('Concatenating two empty arrays', () => {
    const array1 = [];
    const array2 = [];
    const result = concatArrays(array1, array2);
    expect(result).toEqual([]);
});
