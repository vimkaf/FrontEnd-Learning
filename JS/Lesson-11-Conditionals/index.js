var age = 66;

if (age > 30) {
  console.log("You are an old man");
} else if (age > 50) {
  console.log("You are definitely an old man");
} else {
  console.log("You are still young");
}

//>= , <= , == , ===, !=, !==

let x = 5;
let y = "5";

console.log(x !== y);

//Truth Table
/**
 * x | y | output
 * T AND T = T
 * T AND F = F
 * F AND T = F
 * F AND F = F
 *
 * OR
 * T OR T = T
 * T OR F = T
 * F OR T = T
 * F OR F = F
 */

let isMarried = true;
let ageOfConsent = 18;
age = 20;
let locationCode = "ABJ";

if (age >= ageOfConsent && (isMarried == false || locationCode === "AJJ")) {
  console.log("You are eligible for marriage");
} else {
  console.log("You are NOT eligible for marriage");
}

// (age >= ageOfConsent) && (isMarried == false)
// T && T = T

let state = "EK";

switch (state) {
  case "EK":
  case "OS":
    console.log("Your are from the south west part of nigeria");
    break;
  case "JIG":
    console.log("You are from the North");
    break;
  default:
    console.log("You are not a nigerian");
    break;
}
