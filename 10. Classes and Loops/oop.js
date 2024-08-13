const username = "Hello";

const user = {
  username: "Hello2",
  age: 20,
  greet: function () {
    console.log(this);
  },
};

user.greet();
console.log(this);

function User(name, age) {
  this.name = name;
  this.age = age;
  return this;
}

const user1 = User("Hello", 20);
const user2 = User("Bro", 30);
console.log(user1);

const user3 = new User("Hello2", 20);
const user4 = new User("Bro2", 30);
console.log(user3);
console.log(user4);
