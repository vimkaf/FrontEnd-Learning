const numbers = [
  -1, 2, 3, 4, 5, 6, 7, 8, 9, -10, 11, 12, 13, 14, 15, 16, 9, 17, 18, 19, 20,
];

//forEach - Loop/Iterate each item in the array and perform the callback to that item
numbers.forEach(function (value, index) {
  //   console.log(value * 2);
});

//map - Loop/Iterate over an array but returns a new array
let result = numbers.map(function (item) {
  return item * 2;
});

// console.log(result, numbers);

//filter - Filter items in an array that meet a specific condition
const evenNumbers = numbers.filter(function (number) {
  //condition
  return number >= 10;
});

// console.log(evenNumbers);

//reduce - Reduces the items in an array to a single value (from left to right)
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
const reduced = numbers.reduce((previousValue, currentValue) => {
  //   console.log(previousValue, ":", currentValue);
  return previousValue + currentValue;
}, 0);

// console.log(reduced);

//reduceRight - same as reduce but from right to left
const reducedRight = numbers.reduceRight((previousValue, currentValue) => {
  //   console.log(previousValue, ":", currentValue);
  return previousValue + currentValue;
}, 0);
// console.log(reducedRight);

//every - return true or false if every item in the array meets a specified condition
const everyResult = numbers.every((value) => {
  //   console.log(value);
  return value > 0;
});

// console.log(everyResult);

//some - returns true if the condition is met
const someResult = numbers.some((value) => {
  //   console.log(value);
  return value > 0;
});

// console.log(someResult);

//indexOf
console.log(numbers.indexOf(9));

//lastIndexOf
console.log(numbers.lastIndexOf(9));

//find
const findResult = numbers.find((value) => {
  return value === -150;
});

console.log(findResult);
