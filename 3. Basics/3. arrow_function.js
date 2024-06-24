const user = {
  username: "batman",
  dob: "16-04-1990",
  city: "Gotham",
  welcomeMessage: function () {
    // console.log(`Welcome ${this.username} to the ${this.city} city`); // ReferenceError: username is not defined, we have to use this to access the object's properties
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "superman";
// user.welcomeMessage();

// console.log(this); // {}

function One() {
  console.log(this);
}

const Two = function () {
  console.log(this);
}

const Three = () => {
  console.log(this); 
} // explicit return


// One();
// Two();
// Three();

const addTwo = (num1,num2) => (num1 + num2); // implicit return
console.log(addTwo(2,3)); // 5

const addThree = (num1,num2,num3) => ({sum: num1 + num2 + num3}); // returning an object
console.log(addThree(2,3,4)); // { sum: 9 }