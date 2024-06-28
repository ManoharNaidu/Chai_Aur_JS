const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  console.log(val);
}

const map = new Map().set("a", 1).set("b", 2).set("c", 3);

for (const [key, val] of map) {
  console.log(key, val);
}

const myObj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const [key, val] of Object) {
  console.log(key, val);
}
