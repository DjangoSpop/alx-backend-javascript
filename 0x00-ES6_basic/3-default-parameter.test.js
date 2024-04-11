import getSumOfHoods from './3-default-parameter';

// Test case 1: Test with default parameters
console.log(getSumOfHoods(100)); // Output: 208

// Test case 2: Test with custom parameters
console.log(getSumOfHoods(100, 50, 10)); // Output: 160

// Test case 3: Test with only initialNumber parameter
console.log(getSumOfHoods(100, undefined, undefined)); // Output: 208

// Test case 4: Test with only initialNumber and expansion1989 parameters
console.log(getSumOfHoods(100, 50, undefined)); // Output: 160

// Test case 5: Test with only initialNumber and expansion2019 parameters
console.log(getSumOfHoods(100, undefined, 10)); // Output: 208
