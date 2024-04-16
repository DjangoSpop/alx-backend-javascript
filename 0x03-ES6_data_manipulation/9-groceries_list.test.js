import groceriesList from './9-groceries_list';

describe('groceriesList', () => {
    it('should return an empty array', () => {
        const result = groceriesList();
        expect(result).toEqual([]);
    });
});
