const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  console.log(key, obj[key]);
}

const arr = [1, 2, 3, 4, 5];
for (const a in arr) {
  console.log(a, arr[a]);
}
