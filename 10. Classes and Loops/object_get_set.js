const User = {
  _email: "manu@gmail.com     ",
  _password: "1234",

  get email() {
    return this._email.trim() + "fff";
  },
  set email(value) {
    this._email = value.trim().toUpperCase() + "fff";
  },
};

console.log(User);
const user = Object.create(User);
console.log(user.email);
