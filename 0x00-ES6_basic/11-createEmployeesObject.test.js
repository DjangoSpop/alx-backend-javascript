import appendToEachArrayValue from './11-createEmployeesObject';

describe('appendToEachArrayValue', () => {
    it('should append the given string to each value in the array', () => {
        const array = [1, 2, 3];
        const appendString = 'test_';
        const expected = ['test_1', 'test_2', 'test_3'];
        const result = appendToEachArrayValue(array, appendString);
        expect(result).toEqual(expected);
    });

    it('should return an empty array if the input array is empty', () => {
        const array = [];
        const appendString = 'test_';
        const expected = [];
        const result = appendToEachArrayValue(array, appendString);
        expect(result).toEqual(expected);
    });

    it('should return an array with the same length as the input array', () => {
        const array = [1, 2, 3, 4, 5];
        const appendString = 'test_';
        const result = appendToEachArrayValue(array, appendString);
        expect(result.length).toBe(array.length);
    });
});
