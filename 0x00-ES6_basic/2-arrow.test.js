import getNeighborhoodsList from './2-arrow';

describe('getNeighborhoodsList', () => {
    let neighborhoodsList;

    beforeEach(() => {
        neighborhoodsList = getNeighborhoodsList();
    });

    it('should initialize with default neighborhoods', () => {
        expect(neighborhoodsList.sanFranciscoNeighborhoods).toEqual(['SOMA', 'Union Square']);
    });

    it('should add a new neighborhood', () => {
        const newNeighborhood = 'Mission District';
        const updatedNeighborhoods = neighborhoodsList.addNeighborhood(newNeighborhood);
        expect(updatedNeighborhoods).toEqual(['SOMA', 'Union Square', 'Mission District']);
    });
});
