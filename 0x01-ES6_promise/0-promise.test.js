import promise from './0-promise';

describe('promise', () => {
    it('should resolve with the value "Hello, World!"', () => {
        return expect(promise()).resolves.toBe('Hello, World!');
    });
});
