// const coding = ["js", "python", "c++", "java", "ruby"];

// const result = coding.forEach((val) => {
//   console.log(val);
// });

// console.log(result); // undefined

const Nums = [1, 2, 3, 4, 5];
// const result = Nums.filter((val) => val % 2 === 0);

let result = Nums.filter((val) => {
  return val % 2 === 0;
});

console.log(result); // [ 2, 4 ]

result = Nums.map((val) => {
  return val % 2 ? val * 2 : val;
});

console.log(result); // [ 2, 4, 6, 8, 10 ]

// chaining

result = Nums.filter((val) => val % 2 === 0).map((val) => val * 2);
