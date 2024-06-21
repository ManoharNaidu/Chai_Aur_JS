const a = "a";
const b = a;
console.log(b);

const obj = {
  name: "John",
  age: 25,
};
const obj2 = obj;
console.log(obj2, obj);
obj2.name = "Doe";
console.log(obj2, obj);
