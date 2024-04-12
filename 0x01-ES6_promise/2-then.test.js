import handleResponseFromAPI from './2-then';

describe('handleResponseFromAPI', () => {
    it('should return the resolved value of the promise', async () => {
        const promise = Promise.resolve('Success');
        const result = await handleResponseFromAPI(promise);
    expect(result).toBe('Success');
    });

        it('should throw an error if the promise is rejected', async () => {
    const promise = Promise.reject(new Error('API Error'));
        await expect(handleResponseFromAPI(promise)).rejects.toThrow('API Error');
    });
});
