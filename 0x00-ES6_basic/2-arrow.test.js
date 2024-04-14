import getNeighborhoodsList from './2-arrow';

describe('getNeighborhoodsList', () => {
    it('should return an array of neighborhoods', () => {
        const neighborhoods = getNeighborhoodsList();
        expect(Array.isArray(neighborhoods)).toBe(true);
    });

    it('should return the correct list of neighborhoods', () => {
        const neighborhoods = getNeighborhoodsList();
        const expectedNeighborhoods = ['Neighborhood 1', 'Neighborhood 2', 'Neighborhood 3'];
        expect(neighborhoods).toEqual(expectedNeighborhoods);
    });
});
