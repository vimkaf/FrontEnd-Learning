/**
 * Create a function that takes an array of numbers and returns the largest number in the array.
 * [1,34,6,2,6,768,789,331,1,56,8,2]
 */

function largestNumber(numbers) {
  console.log(Math.max(...numbers)); //spread operator (...)
}

largestNumber([1, 34, 6, 2, 6, 768, 789, 331, 1, 56, 8, 2, 90, 100, 20123]);
