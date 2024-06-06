const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should round the numbers before calculating the sum', function() {
        assert.strictEqual(calculateNumber(1.7, 3.8), 5); // This line is failing
        assert.strictEqual(calculateNumber(-1.7, 3.8), 2);
        assert.strictEqual(calculateNumber(-1.7, -3.8), -6);
        assert.strictEqual(calculateNumber(1.3, 1.8), 3);
      });
      assert.strictEqual(calculateNumber(1.7, 3.8), 5);
});
