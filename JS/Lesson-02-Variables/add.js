let num1 = 0, num2 = 0, total = 0;
const add = function(num1, num2){

};

add(5,3);
function add(num1, num2){
    total = num1 + num2;
    show_result(total);
}

function subtract(num1, num2){

}

function show_result(total){
    document.getElementById("result").innerHTML = `${num1}  - ${num2} = ${total}`;


}
document.getElementById("add").addEventListener("click", add());


document.getElementById("subtract").addEventListener("click", function(){
    num1 = parseInt( document.getElementById("num1").value );
    num2 = parseInt( document.getElementById("num2").value );

    total = num1 - num2;

    document.getElementById("result").innerHTML = `${num1}  - ${num2} = ${total}`;


    
});

document.getElementById("multiply").addEventListener("click", function(){
    num1 = parseInt( document.getElementById("num1").value );
    num2 = parseInt( document.getElementById("num2").value );

    total = num1 * num2;

    document.getElementById("result").innerHTML = `${num1}  x ${num2} = ${total}`;

});

document.getElementById("divide").addEventListener("click", function(){
    num1 = parseInt( document.getElementById("num1").value );
    num2 = parseInt( document.getElementById("num2").value );

    total = num1 / num2;

    document.getElementById("result").innerHTML = `${num1}  / ${num2} = ${total}`;

});

/**
 * 
 * Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
 * 
 * Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
 *    [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
 *    Expected Output :
 *    60°C is 140 °F
 *    45°F is 7.222222222222222°C
 *
 * 
 */


