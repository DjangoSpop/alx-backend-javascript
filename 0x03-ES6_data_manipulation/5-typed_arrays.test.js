const assert = require('assert');
const createInt8TypedArray = require('./5-typed_arrays');

describe('createInt8TypedArray', () => {
    it('should create a new Int8TypedArray with the specified length', () => {
        const length = 5;
        const int8Array = createInt8TypedArray(length);
        assert.strictEqual(int8Array.length, length);
        assert.strictEqual(int8Array instanceof Int8Array, true);
    });

    it('should create a new Int8TypedArray with the specified value at the specified position', () => {
        const length = 5;
        const position = 2;
        const value = 10;
        const int8Array = createInt8TypedArray(length, position, value);
        assert.strictEqual(int8Array[position], value);
    });

    it('should create a new Int8TypedArray with default values if no position and value are specified', () => {
        const length = 5;
        const int8Array = createInt8TypedArray(length);
        assert.strictEqual(int8Array[0], 0);
        assert.strictEqual(int8Array[1], 0);
        assert.strictEqual(int8Array[2], 0);
        assert.strictEqual(int8Array[3], 0);
        assert.strictEqual(int8Array[4], 0);
    });
});
