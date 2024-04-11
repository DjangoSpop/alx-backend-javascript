import iterateThroughObject from './101-iterateThroughObject';
import iterateThroughObject from './101-iterateThroughObject';

describe('iterateThroughObject', () => {
    it('should iterate through the object and call the reportWithIterator function for each key-value pair', () => {
        const obj = {
            name: 'John',
            age: 30,
            city: 'New York',
        };

        const reportWithIterator = jest.fn();

        iterateThroughObject(obj, reportWithIterator);

        expect(reportWithIterator).toHaveBeenCalledTimes(3);
        expect(reportWithIterator).toHaveBeenCalledWith('name', 'John');
        expect(reportWithIterator).toHaveBeenCalledWith('age', 30);
        expect(reportWithIterator).toHaveBeenCalledWith('city', 'New York');
    });
describe('iterateThroughObject', () => {
    it('should iterate through the object and call the reportWithIterator function for each key-value pair', () => {
        const obj = {
            name: 'John',
            age: 30,
            city: 'New York',
        };

        const reportWithIterator = Object.entries(obj); // Convert the object to an iterable using Object.entries()

        iterateThroughObject(reportWithIterator, (key, value) => {
            // Your logic here
        });

        // Your assertions here
    });
});
});
