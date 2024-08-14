function multipleBy5(n) {
  return n * 5;
}
console.log(multipleBy5); // [Function: multipleBy5]
multipleBy5.power = 2;

console.log(multipleBy5(2)); // 10
console.log(multipleBy5.power); // 2
console.log(multipleBy5); // [Function: multipleBy5] { power: 2 }
console.log(multipleBy5.prototype);

function createUser(name, age) {
  this.name = name;
  this.age = age;

  this.print = function () {
    console.log(this.name, this.age);
  };
}

createUser.prototype.incrementAge = function () {
  this.age++;
};
createUser.prototype.decrementAge = function () {
  this.age--;
};

const user = new createUser("John", 25);
console.log(user); // createUser { name: 'John', age: 25, print: [Function] }
user.incrementAge();
console.log(user.age); // 26
user.decrementAge();
console.log(user.age); // 25
console.log(user.prototype);

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
