function User(email, password) {
  this.email = email;
  this.password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email;
    },
    set: function (value) {
      this._email = value;
    },
  });
}

//  this is a function based defineProperty, likewise we can use object based defineProperty
