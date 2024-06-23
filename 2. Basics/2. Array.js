const marvel = ["thor", "ironman", "spiderman"];
const dc = ["batman", "superman", "wonderwoman"];

//concat
marvel.push(dc);
console.log(marvel); // ["thor", "ironman", "spiderman", ["batman", "superman", "wonderwoman"]]

marvel.pop();

const combined = marvel.concat(dc);
console.log(combined); // ["thor", "ironman", "spiderman", "batman", "superman", "wonderwoman"]

const combined2 = [...marvel, ...dc];
console.log(combined2); // ["thor", "ironman", "spiderman", "batman", "superman", "wonderwoman"]

marvel.push(...dc);
console.log(marvel); // ["thor", "ironman", "spiderman", "batman", "superman", "wonderwoman"]

const Arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]];
const newArr = Arr.flat(1);
const newArr2 = Arr.flat(2);
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11, 12]]
console.log(newArr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const newArr3 = Array.from("hello");
console.log(newArr3); // ["h", "e", "l", "l", "o"]

const newArr4 = Array.from({ name: 5 });
console.log(newArr4);

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
