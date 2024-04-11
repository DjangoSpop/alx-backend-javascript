import getFullResponseFromAPI from './1-promise';

describe('getFullResponseFromAPI', () => {
    it('should resolve with the full response when successful', async () => {
        const response = { status: 200, data: 'Success' };
        const result = await getFullResponseFromAPI(true);
        expect(result).toEqual(response);
    });

    it('should reject with an error when unsuccessful', async () => {
        const error = new Error('API request failed');
        await expect(getFullResponseFromAPI(false)).rejects.toThrow(error);
    });
});
