class User {
  constructor(id, username) {
    this.id = id;
    this.u = username;
  }

  sayHello() {
    return `Hello Mr.${this.u}`;
  }
}

let userOne = new User(1, "Yousef");

console.log(User.prototype);
console.log(userOne);
User.prototype.sayWelcome = function () {
  return `Welcome To IUG`;
};

Object.prototype.love = "Yousef Harara js";

String.prototype.addDotBetweenCharacters = function() {
  return this.split("").join(".");
}

let myStr = "Yousef";

console.log(String.prototype);