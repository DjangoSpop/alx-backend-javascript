import createIteratorObject from './100-createIteratorObject';

describe('createIteratorObject', () => {
    it('should return an iterator object', () => {
        const report = {
            name: 'John Doe',
            age: 30,
            occupation: 'Software Engineer',
        };

        const iterator = createIteratorObject(report);

        expect(typeof iterator).toBe('object');
        expect(typeof iterator.next).toBe('function');
    });

    it('should iterate over the properties of the report object', () => {
        const report = {
            name: 'John Doe',
            age: 30,
            occupation: 'Software Engineer',
        };

        const iterator = createIteratorObject(report);

        expect(iterator.next()).toEqual({ value: 'John Doe', done: false });
        expect(iterator.next()).toEqual({ value: 30, done: false });
        expect(iterator.next()).toEqual({ value: 'Software Engineer', done: false });
        expect(iterator.next()).toEqual({ value: undefined, done: true });
    });
});
