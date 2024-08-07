console.log("data types");

let name = "John's food is 'delicious'";
/**
 * \'
 * \"
 * \n
 * \t
 * \r
 * 
 */
let name2 = 'John\'s \t\tfood is \ndelicious\"';

console.log(name2);

let age = 20; //unsigned integer

let score = -10; //signed integer

let amount = 10.78;

let square = 5e-2; //5 x 10^2

console.log(square);

console.log(6**4);

//Boolean;

let status = false;

let output = 5 > 2;
console.log(output);
let j = undefined;
let k = null;
console.log(j);

console.log("null" === null);

const student = {
    name : "John Doe",
    age : 20,
    admission_number : "1001/AD/19/999",
    department : "Agric Science",
};

console.log(student.name, student['admission_number']);

student.name = "Dennis Rodman";

console.log(student.name, student['admission_number']);

console.log(typeof [], typeof {}, typeof new Date(), typeof 2.5);

/**
 * String
 * Number
 * Boolean
 * Objects
 */

let x = 16 + "Volvo";
console.log(typeof x);