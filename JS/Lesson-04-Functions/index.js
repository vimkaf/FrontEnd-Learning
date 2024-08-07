/**
 * Syntax
 * 
 * Function??
 * 
 * function functionName(){}
 */

function sayHello(){
    console.log('Hello world');
}

sayHello();

function greet(username,location, age = 18 ){
    console.log("Welcome " + username);
    console.log("You are " + age + "years old");
}


greet("Kay", "Lagos");

function dd(){
    console.log('Helix is a good editor');
}

function add(x,y){

    //local variables
    return x + y;
}

let sum  = add(10,10); //20

let newSum = sum + 5; // 20 + 5

console.log(newSum);

let total = add(2,3)  + 10;


