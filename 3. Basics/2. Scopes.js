var c = 5;

if (true) {
  let a = 1;
  const b = 2;
  var c = 3;
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
console.log(c); // 3

// the global scope we run in node is different from the global scope in the browser

// ********************* wow ********************* //

console.log(addOne(1)); // 2
function addOne(num) {
  return num + 1;
}

console.log(addTwo(1)); // ReferenceError: addTwo is not defined
const addTwo = function (num) {
  return num + 2;
};

console.log(addThree(1)); // ReferenceError: addThree is not defined
const addThree = (num) => num + 3;
