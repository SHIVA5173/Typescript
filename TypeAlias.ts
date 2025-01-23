type User = {
  uID: number;
  uName: string;
  uAge: number;
  // readOnly Property
  readonly uEmail: string;
  // optional property
  uSalary?: number;
};

const Person = (user: User): string => {
  return `ID: (${user.uID})  Name: (${user.uName})  Age: (${user.uAge})  Email:(${user.uEmail}) )`;
};

const U1 = Person({
  uID: 6174,
  uName: "Shiva WebDev",
  uAge: 22,
  uEmail: "shiva@gmail.com",
});

console.log(U1);

const U2 = Person({
  uID: 4881,
  uName: "Radha WebDev",
  uAge: 22,
  uEmail: "radha@gmail.com",
  uSalary: 9580000,
});
console.log(U2);
