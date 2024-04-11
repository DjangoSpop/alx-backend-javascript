import taskBlock from './1-block-scoped';

describe('taskBlock', () => {
    test('should return "Block scope" if trueOrFalse is true', () => {
        expect(taskBlock(true)).toBe('Block scope');
    });

    test('should return "Function scope" if trueOrFalse is false', () => {
        expect(taskBlock(false)).toBe('Function scope');
    });
});
