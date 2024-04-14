import taskBlock from './1-block-scoped';

describe('taskBlock', () => {
    it('should return [false, true] when trueOrFalse is false', () => {
        expect(taskBlock(false)).toEqual([false, true]);
    });

    it('should return [true, false] when trueOrFalse is true', () => {
        expect(taskBlock(true)).toEqual([true, false]);
    });

    it('should return [false, true] when trueOrFalse is undefined', () => {
        expect(taskBlock()).toEqual([false, true]);
    });

    // Additional test cases
    it('should return [false, true] when trueOrFalse is null', () => {
        expect(taskBlock(null)).toEqual([false, true]);
    });

    it('should return [false, true] when trueOrFalse is 0', () => {
        expect(taskBlock(0)).toEqual([false, true]);
    });

    it('should return [false, true] when trueOrFalse is an empty string', () => {
        expect(taskBlock('')).toEqual([false, true]);
    });
});
