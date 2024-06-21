let score = "2a7";

console.log(typeof score);

let valueInNumber = Number(score);

console.log(valueInNumber, typeof valueInNumber);

console.log(Number(null), Number(undefined), Number(true), Number(false));

let a = 1;
let b = String(a);
let c = Boolean(a);
console.log(a, b, c, typeof b, typeof c);
