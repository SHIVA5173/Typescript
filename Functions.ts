function User(
  userId: number,
  userName: string,
  userEmail: string,
  userSalary: string
): string {
  return `${userId} ${userName} ${userEmail} ${userSalary}`;
}

// console.log(User(5173, "Chandra Mohan", "chandra@gmail.com", "$2563K"));

//  Return Annotations:

const userValidation = (Email: string, Password: string): string => {
  let userEmail: string = "radha@gmail.com";
  let userPassword: string = "radha#6174";

  return `${
    Email === userEmail && Password === userPassword
      ? "Welcome Back"
      : "Please Enter Correct Details:)"
  } `;
};

// console.log(userValidation("radha@gmail.com", "radha#6174"));

// void Annotations

const sumOfNaturalNumbers = (num: number): void => {
  let sum = (num * (num + 1)) / 2;
  console.log(`The Sum of ${num} Natural Numbers: ${sum}`);
};

// sumOfNaturalNumbers(100);

// never Annotations:
// 1.A function always throws an error
// 2.A function that has infinite loops
// 3.A variable that have never a value

const infiniteLoop = (): never => {
  while (true) {
    // infinite loop
  }
};

let z: never;
