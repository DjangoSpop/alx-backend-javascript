import appendToEachArrayValue from './10-loops';

describe('appendToEachArrayValue', () => {
    it('should append the given string to each value in the array', () => {
        const array = ['hello', 'world', 'foo', 'bar'];
        const appendString = '!';
        const expected = ['hello!', 'world!', 'foo!', 'bar!'];
        const result = appendToEachArrayValue(array, appendString);
        expect(result).toEqual(expected);
    });

    it('should handle empty array', () => {
        const array = [];
        const appendString = '!';
        const expected = [];
        const result = appendToEachArrayValue(array, appendString);
        expect(result).toEqual(expected);
    });

    it('should handle empty string', () => {
        const array = ['hello', 'world', 'foo', 'bar'];
        const appendString = '';
        const expected = ['hello', 'world', 'foo', 'bar'];
        const result = appendToEachArrayValue(array, appendString);
        expect(result).toEqual(expected);
    });
});
