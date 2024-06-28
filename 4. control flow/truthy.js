const manu = "m@email.com";

if (manu) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

// truthy is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

// nulish coalescing operator (??): null undefined
let val1;
val1 = 5 ?? 10;

console.log(val1);

val1 = null ?? 10;

console.log(val1);

//  Terinary operator (condition ? exprIfTrue : exprIfFalse)
