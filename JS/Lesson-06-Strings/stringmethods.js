let str = "Javascript is cool";

//The length of a string
console.log(str.length);

//Transfrom the string to uppercase
console.log(str.toUpperCase());

//Transform the string to lowercase
console.log(str.toLowerCase());

str = "  Javascript is still cool    ";

//remove space at the begining of a string
console.log(str.trimStart());

//remove space at the end of a string
console.log(str.trimEnd());

//remove all spaces at the beginning and the end
console.log(str.trim());

str = "vimkaf";

//Pad a string at the beginning
console.log(str.padStart(20, "*"));

//pad a sting at the end
console.log(str.padEnd(20, "*"));

str = "JavAscript is cool"

//accessing characters in a string
console.log(str[5]);

//slicing a string
console.log(str.slice(0, 5));

console.log(str.substring(0, 5));

//replacing parts of a string
console.log(str.replace("a", "*")); //replaces the first match 
console.log(str.replace(/a/g, "*")); //replace all occurrences
console.log(str.replace(/a/gi, "*")); //replace all occurrences regardless of the case

//position of a character in the string
str = "Hello Aworld";
console.log(str.charAt(6));
console.log(str.charCodeAt(6));

//split a string 
str = "CSS, JS, PHP, Dart, C#";
console.log(str.split(','));

//check if a string starts with a characeter
str = "#helloworld";
console.log(str.startsWith("#"));

str = "vimkaf@gmail"
console.log(str.endsWith(".com"));

//join two string together
str = "Hello";
console.log(str + " World");
console.log(str.concat(" World", " My name is Raju"));

//check if a string includes another string
str = "@vimkafgmail.com";
console.log(str.includes("@"));

//return the index of a characeter in a string
str = "Hi";
console.log(str.indexOf("i"));

//repeats a string by a specifiednumber of times
str = '*'
console.log(str.repeat(50));













