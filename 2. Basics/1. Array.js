let myArr = [5, 2, 2, 8, 7, 4];
myArr.push(9);
console.log(myArr); // [5,2,2,8,7,4,9]
myArr.pop(); // removes the last element

myArr.unshift(1); // adds 1 to the start of the array
console.log(myArr); // [1,5,2,2,8,7,4]

myArr.shift(); // removes the first element
console.log(myArr); // [5,2,2,8,7,4]

const newArr = myArr.join("-"); // joins the array elements with a hyphen
console.log(newArr); // 5-2-2-8-7-4

// slice , splice
 const sliceArr = myArr.slice(1, 4); // returns a new array from index 1 to 4
console.log(sliceArr); // [2,2,8]

console.log("A ",myArr); // [5,8,7,4]

const spliceArr = myArr.splice(1, 2); // removes 2 elements starting from index 1
console.log(spliceArr); // [2,2]

console.log("B ",myArr); // [5,8,7,4]

