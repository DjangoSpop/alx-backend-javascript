import getSanFranciscoDescription from './6-string-interpolation';

describe('getSanFranciscoDescription', () => {
    it('should return the correct description', () => {
        const description = getSanFranciscoDescription();
        expect(description).toEqual('San Francisco is a vibrant city located in California.');
    });
});
