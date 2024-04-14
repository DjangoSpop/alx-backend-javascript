import returnHowManyArguments from './4-rest-parameter';

// Test case 1: No arguments
console.log(returnHowManyArguments()); // Output: 0

// Test case 2: Single argument
console.log(returnHowManyArguments('Hello')); // Output: 1

// Test case 3: Multiple arguments
console.log(returnHowManyArguments(1, 'two', true)); // Output: 3

// Test case 4: Array as argument
console.log(returnHowManyArguments([1, 2, 3])); // Output: 1

// Test case 5: Object as argument
console.log(returnHowManyArguments({ name: 'John', age: 30 })); // Output: 1
