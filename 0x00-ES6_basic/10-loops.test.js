import appendToEachArrayValue from './10-loops';

describe('appendToEachArrayValue', () => {
    it('should append the given string to each value in the array', () => {
        const array = [1, 2, 3];
        const appendString = 'prefix_';
        const expected = ['prefix_1', 'prefix_2', 'prefix_3'];
        const result = appendToEachArrayValue(array, appendString);
        expect(result).toEqual(expected);
    });

    it('should handle an empty array', () => {
        const array = [];
        const appendString = 'prefix_';
        const expected = [];
        const result = appendToEachArrayValue(array, appendString);
        expect(result).toEqual(expected);
    });

    it('should handle an array with a single value', () => {
        const array = [5];
        const appendString = 'prefix_';
        const expected = ['prefix_5'];
        const result = appendToEachArrayValue(array, appendString);
        expect(result).toEqual(expected);
    });
});
