import iterateThroughObject from './101-iterateThroughObject';

describe('iterateThroughObject', () => {
    it('should iterate through an object and call the provided function for each key-value pair', () => {
        const obj = {
            name: 'John',
            age: 30,
            city: 'New York',
        };

        const callback = jest.fn();

        iterateThroughObject(obj, callback);

        expect(callback).toHaveBeenCalledTimes(3);
        expect(callback).toHaveBeenCalledWith('name', 'John');
        expect(callback).toHaveBeenCalledWith('age', 30);
        expect(callback).toHaveBeenCalledWith('city', 'New York');
    });
});
