/**
 * Create a function that takes an
 * array of numbers and prints whether each number is even or odd.
 * [1,2,3,234,6,65,23,667,8]
 */

function isEvenOrOdd(numbers) {
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      console.log(`${number} is even`); //string interpolation
    } else {
      console.log(`${number} is odd`);
    }
  });
}

isEvenOrOdd([1, 2, 3, 234, 6, 65, 23, 667, 8, 56]);
