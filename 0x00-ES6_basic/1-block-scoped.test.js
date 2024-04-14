import taskBlock from './1-block-scoped';

describe('taskBlock', () => {
    it('should return [false, true] when trueOrFalse is false', () => {
        expect(taskBlock(false)).toEqual([false, true]);
    });

    it('should return [true, false] when trueOrFalse is true', () => {
        expect(taskBlock(true)).toEqual([true, false]);
    });
});
