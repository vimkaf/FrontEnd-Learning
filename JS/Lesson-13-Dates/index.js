const date = new Date();
console.log(date.toDateString());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.toISOString());
console.log(date.getSeconds());
console.log(date.getTime()); //unix epoch timestamp - The time in seconds from the first CPU tick
console.log(date.toLocaleDateString("en-NG"));

const date2 = new Date("2023-05-01");
console.log(date2.toDateString());
console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDate());
console.log(date2.toISOString());
console.log(date2.getSeconds());
console.log(date2.getTime()); //unix epoch timestamp - The time in seconds from the first CPU tick
console.log(date2.toLocaleDateString("en-NG"));

const date3 = new Date(1990, 8, 25, 10, 5, 0);
console.log(date3.toDateString());
console.log(date3.getFullYear());
console.log(date3.getMonth());
console.log(date3.getDate());
console.log(date3.toISOString());
console.log(date3.getSeconds());
console.log(date3.getTime()); //unix epoch timestamp - The time in seconds from the first CPU tick
console.log(date3.toLocaleDateString("en-NG"));

const date4 = new Date();

date4.setFullYear(2003);
date4.setMonth(5);
date4.setDate(10);
console.log(date4.toDateString());
