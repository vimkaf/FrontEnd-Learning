/* 
Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]] 
*/

function array_clone(input) {
  const clonedArray = [];

  //check if input is an array
  if (Array.isArray(input)) {
    input.forEach(function (item) {
      clonedArray.push(item);
    });
  }

  return clonedArray;
}

console.log(array_clone([1, 2, 4, 0]));
console.log(array_clone([1, 2, [4, 0]]));
