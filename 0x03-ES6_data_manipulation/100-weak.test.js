import { queryAPI, weakMap } from './100-weak';

describe('queryAPI', () => {
    beforeEach(() => {
        weakMap.set('users', ['John', 'Jane', 'Alice']);
        weakMap.set('products', ['Apple', 'Banana', 'Orange']);
    });

    afterEach(() => {
        weakMap.delete('users');
        weakMap.delete('products');
    });

    test('should return the correct data for valid endpoints', () => {
        expect(queryAPI('users')).toEqual(['John', 'Jane', 'Alice']);
        expect(queryAPI('products')).toEqual(['Apple', 'Banana', 'Orange']);
    });

    test('should return undefined for invalid endpoints', () => {
        expect(queryAPI('orders')).toBeUndefined();
        expect(queryAPI('categories')).toBeUndefined();
    });
});
