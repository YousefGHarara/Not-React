console.log("Hello");

const dateNow = new Date();
const BOD = new Date("Jan 22, 04")
const dateDiff = dateNow - BOD;

console.log(dateDiff / 1000 / 60 / 60 / 24/ 365);

// console.log(dateNow.getFullYear());
// console.log(dateNow.getUTCFullYear());
// console.log(dateNow.getDate());
// console.log(dateNow.getMonth()); // month Jan > 0 index ?? ok ?? +1 to get the current month
// console.log(dateNow.getDay()); // Sunday > the first day 0 index 
// console.log(dateNow.getTime());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());

console.log(dateNow);
console.log("*".repeat(50));

console.log(Date.parse("Jan 22, 2004"));

let date1 = new Date(0);
console.log(date1);
let date2 = new Date("Jan 22, 2004");
console.log(date2);
let date3 = new Date(1074722400000);
console.log(date3);
let date4 = new Date("2004-2-30");
console.log(date4);

