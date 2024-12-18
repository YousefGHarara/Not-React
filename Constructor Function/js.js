
// function customer (username, email, salary) {

//   this.name = username;
//   this.e = email;
//   this.s = salary +1_500;
// }


class customer {

  static count = 0;
  #privateEle;

  constructor(username, email, salary, ePrivate) {

    customer.count++;
    this.name = username || "unKnown";
    this.e = email;
    this.s = salary < 2000 ? salary + 1599 : salary;
    this.#privateEle = ePrivate;
    
    this.msg = function() {
      return `Hello ${this.name} your salary is ${salary}`
    }
  }

  // methods 

  writeMessage() {
    return `Hello from method in object ${this.name}`;
  }

  // static 
  static sayHello () {
    return `Hello from class`
  }
  
  static countMembers() {
    return `${this.count} members created .`;
  }

  getPrivateEle() {
    return this.#privateEle + " %ERROR%";
  }
}

class admin extends customer {
  constructor(username, email, permission) {
    super(username, email);
    this.p = permission;
  }
}

let adminOne = new admin("Sayed", "sa@outlook.sa", "@MVP");
console.log(adminOne.name);
console.log(adminOne.e);
console.log(adminOne.p);
console.log(adminOne.writeMessage());

console.log("____________");
let privateCustomer = new customer("Private Name", "pr@gm.com", 3000, 5000)
console.log(privateCustomer.getPrivateEle());
console.log("____________");

let customerOne = new customer("Yousef", "hr@gmail.com", 2000);
let customerTwo = new customer("Yousef", "hr@gmail.com", 2000);
let customerThree = new customer("Yousef", "hr@gmail.com", 2000);


console.log(customerOne.name);
console.log(customerOne.e);
console.log(customerOne.s);
console.log(customerOne.msg());
console.log(customerOne.writeMessage());
console.log(customerOne.count);
console.log(customer.count);
console.log(customerOne.sayHello);
console.log(customer.sayHello());
console.log(("-").repeat(50));

console.log(customer.countMembers());











// let customerOne = new customer("Yousef", "hr@gmail.com", 2000);
// let customerTwo = new customer("", "ah@gmail.com", 1000);
// let customerThree = new customer("Khalil", "kl@gmail.com", 3500);

// console.log(customerOne.name);
// console.log(customerOne.e);
// console.log(customerOne.s);
// console.log(customerOne.msg());
// console.log(customerOne.writeMessage());
// console.log(("-").repeat(50));

// console.log(customerTwo.name);
// console.log(customerTwo.e);
// console.log(customerTwo.s);
// console.log(customerTwo.msg); // native code
// console.log(customerTwo.writeMessage); // native code
// console.log(("-").repeat(50));

// console.log(customerThree.name);
// console.log(customerThree.e);
// console.log(customerThree.s);
// console.log(("-").repeat(50));


// let strOne = "Yousef";
// let strTwo = new String("Yousef new String");

// console.log(typeof strOne);
// console.log(typeof strTwo);

// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);


// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);
