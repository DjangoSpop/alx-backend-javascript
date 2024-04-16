import setFromArray from './6-set';

describe('setFromArray', () => {
    it('should return a Set containing all unique elements from the input array', () => {
        const arr = [1, 2, 3, 2, 4, 5, 3];
        const expectedSet = new Set([1, 2, 3, 4, 5]);

        const result = setFromArray(arr);

        expect(result).toEqual(expectedSet);
    });

    it('should return an empty Set if the input array is empty', () => {
        const arr = [];
        const expectedSet = new Set();

        const result = setFromArray(arr);

        expect(result).toEqual(expectedSet);
    });

    it('should return a Set with a single element if the input array has only one element', () => {
        const arr = [42];
        const expectedSet = new Set([42]);

        const result = setFromArray(arr);

        expect(result).toEqual(expectedSet);
    });
});
