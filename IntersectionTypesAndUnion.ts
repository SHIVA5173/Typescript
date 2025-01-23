type userInfo = {
  firstName: string;
  lastName: string;
  age: number;
};

type accountDetails = {
  email: string;
  accountNumber: number;
};

// Intersection Type: Combine the multiple types
const Shiva: userInfo & accountDetails = {
  firstName: "Shiva",
  lastName: "Webdev",
  age: 21,
  email: "pshiva@gmail.com",
  accountNumber: 4210129698,
};

console.log(Shiva);

// Unions: To accept Multiple Types
const Vijay: userInfo | accountDetails = {
  firstName: "Vijay",
  lastName: "Webdev",
  age: 22,
};

const Chandra: userInfo | accountDetails = {
  email: "chandra@gmail.com",
  accountNumber: 2085545903,
};

console.log(Vijay);
console.log(Chandra);
