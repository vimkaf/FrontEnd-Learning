console.log(new Date().toLocaleDateString());

const date = new Date();
console.log(date);
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getTime());
console.log(date.toTimeString());

const newYear = new Date("2023-01-01");
console.log(newYear.getFullYear());

const date1 = new Date("2024-05-01");
const date2 = new Date("2024-08-01");

console.log(date1 > date2);
