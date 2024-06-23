// singleton
// const circle = Object.create()

// 1. Object literal
const mySymbol = Symbol("secret");

const User = {
  name: "John",
  age: 30,
  email: "john@email.com",
  [mySymbol]: "my secret",
};

console.log(User);
console.log(User.name);
console.log(User.age);
console.log(User.email);
console.log(User.mySymbol);
console.log(typeof User.mySymbol);

User.age = 50;
Object.freeze(User);
User.age = 60;
console.log(User);
