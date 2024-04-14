import getSumOfHoods from './3-default-parameter';

// Test case 1: Testing with all parameters provided
console.log(getSumOfHoods(100, 50, 30)); // Output: 180

// Test case 2: Testing with only initialNumber provided
console.log(getSumOfHoods(100)); // Output: 208

// Test case 3: Testing with only initialNumber and expansion1989 provided
console.log(getSumOfHoods(100, 50)); // Output: 158

// Test case 4: Testing with only initialNumber and expansion2019 provided
console.log(getSumOfHoods(100, undefined, 30)); // Output: 130

// Test case 5: Testing with no parameters provided
console.log(getSumOfHoods()); // Output: 108
