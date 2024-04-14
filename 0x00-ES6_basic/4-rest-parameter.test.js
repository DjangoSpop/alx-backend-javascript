import returnHowManyArguments from './4-rest-parameter';

describe('returnHowManyArguments', () => {
    it('should return the number of arguments passed', () => {
        expect(returnHowManyArguments()).toBe(0);
        expect(returnHowManyArguments(1)).toBe(1);
        expect(returnHowManyArguments(1, 2)).toBe(2);
        expect(returnHowManyArguments(1, 2, 3)).toBe(3);
        expect(returnHowManyArguments('a', 'b', 'c', 'd')).toBe(4);
    });
});
