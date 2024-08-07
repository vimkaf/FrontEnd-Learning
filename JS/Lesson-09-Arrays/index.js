//What is an array?
/**
let product1 = "Donatella";
let product2 = "Indomie";

let products = ['Donatella', 'Indomie']; //Array of products
**/

//Create an array
const products = ["Rice", "Beans", "Indomie", "Sucre"];

const sample = [20, "Hello", "World", true, 52.36];

console.log(products, sample);

//Using the new Keyword
const scores = new Array(20, 30, 11, 78, 92);
console.log(scores);

//Adding Items to an array
const students = [];
students[0] = "Kolawole Emmanuel";
students[1] = "Jeremiah Gyang";
console.log(students);

//Arrays are objects
console.log(typeof students);

//Array Elements can contain other objects, functions and datatypes
students[2] = ["Jessica", "James"];
students[3] = {
  name: "Howdie",
  address: "Lagos",
};

students[4] = () => {
  return true;
};

console.log(students);

//The length property
console.log(students.length);

//Access the first element of an array
console.log(students[2][0]);

//Access the last element of an array
console.log(students[students.length - 1]);

//Looping through an array
scores.forEach((item) => {
  console.log(item * 2);
});

//When to use an array vs objects

const books = [
  {
    name: "General Mathematics",
    publisher: "Oxford",
    author: "Macmillian",
  },
  {
    name: "New School Physics",
    publisher: "Lantern",
    author: "Ademola O.",
  },
];

console.log(books[0].name);

//check if a variable is an array
console.log(Array.isArray(students));
console.log(students instanceof Array);

//Push
console.log(scores);
scores.push(11);
console.log(scores);

//Pop
scores.pop();
console.log(scores);

//Shift
scores.shift();
console.log(scores);

//Unshift
scores.unshift(52);
console.log(scores);

//removing a particular item from an array
delete scores[2];
console.log(scores);
//scores[2] = 88;
