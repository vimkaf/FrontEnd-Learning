let x = 300;
let y = -3;
let z = 3.14;
let i = 1.82e-3; //Exponential number

//+ - Addition and a concatenator
console.log(2 + 40);
console.log(5 + "4");
console.log(3 - "2");
console.log(5 * "go");
console.log(6 / "5");

console.log(i);

//base 10 - 0,1,2,3,4,5,6,7,8,9

//Hexadecimal numbers base 16 - 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F

//50A
let hexValue = 0x5f;

console.log(hexValue);

//NaN - Not a Number (special value in js)

let result = 5 / "a";

if (isNaN(result)) {
  console.log("Number is invalid");
}

console.log(isNaN(4)); //false

console.log(isNaN("4")); //false

console.log(isNaN("a")); //true

console.log(5 / 0);
