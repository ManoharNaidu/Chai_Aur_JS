class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    if (value.includes("@")) {
      this._email = value;
    } else {
      throw new Error("Invalid email");
    }
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const user = new User("mg.a", "abc");

console.log(user);
