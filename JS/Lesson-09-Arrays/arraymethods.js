const names = ["James", "Emmanuel", "Kabiru", "Shola", "MiMi"];

console.log("Names: ", names);

//pop - Remove item from the end of the array
names.pop();
console.log("Names poped", names);

//push - add an element to the end of an array
names.push("Sharon");
console.log("Names pushed", names);

//shift - Remove an item from the begining of an array
names.shift();
console.log("Names shifted", names);

//unshift - Add an item to the begining of an array
names.unshift("Dexter");
console.log("Names unshifted", names);

//join
console.log(names.join("|"));

//concat
const newStudents = ["Hamidu", "Sadiyya", "Femi"];
const newStudentss = ["Shade"];

console.log("Names before concat: ", names);
console.log(names.concat(newStudents, newStudentss));
console.log("Names after concat: ", names);

//slice - retun a particular portion of an array
console.log(names.slice(0, 2));

//splice - add items to a particular section of an array
console.log(names);
names.splice(1, 1);
console.log(names);

//toString
console.log(names.toString());
