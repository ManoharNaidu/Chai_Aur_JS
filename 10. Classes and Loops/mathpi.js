const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// Our own descriptor

const chai = {
  name: "ginger chai",
  price: 100,
  isAvailable: true,
};

let myDescriptor = Object.getOwnPropertyDescriptor(chai, "name");
console.log(myDescriptor);
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});
myDescriptor = Object.getOwnPropertyDescriptor(chai, "name");
console.log(myDescriptor);

chai.name = "masala chai";
console.log(chai.name);

for (let [key, val] of Object.entries(chai)) {
  console.log(key, val);
}
