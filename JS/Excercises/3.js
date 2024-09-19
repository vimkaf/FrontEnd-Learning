/**
 * Write a function that takes an array of numbers and returns the sum of all the numbers.
 * [12,123,34,345,56,76,78,78]
 */

function sum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  console.log(`The sum of array is ${sum}`);
}

sum([12, 123, 34, 345, 56, 76, 78, 78, 100]);
