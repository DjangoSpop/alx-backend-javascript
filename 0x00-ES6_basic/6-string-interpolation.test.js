import getSanFranciscoDescription from './6-string-interpolation';

describe('getSanFranciscoDescription', () => {
    it('should return the correct description', () => {
        const expected = 'San Francisco is a vibrant city located in California.';
        const result = getSanFranciscoDescription();
        expect(result).toEqual(expected);
    });
});
