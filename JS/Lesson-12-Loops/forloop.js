const products = ["Book", "Pen", "Paper", "TV", "USB Cable"];

//Iterables - something or an object you can loop over
// console.log(products[3]);
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

console.log("...............");

for (let i = products.length - 1; i >= 0; i--) {
  console.log(products[i]);
}
//Infinite Loop
// for (let i = 0; i > 0; i++) {
//   console.log(i);
// }
