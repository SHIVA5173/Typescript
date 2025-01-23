//  Annotations:

let userID: number, userName: string, useEmail: string, isActive: boolean;
userID = 4882;
userName = "Shiva WebDev";
useEmail = "shiva@gmail.com";
isActive = true;

console.log(`User Details: ${userID} ${userName} ${useEmail} ${isActive}`);

// Type Inference: Ts atomatically detect the type of data based value assigned to the variable

let empID = 6174;
let empName = "Shiva WebDev";
let isEmployee = false;

console.log(`${empID} ${empName} ${isEmployee}`);

// Any Type:

let data: any;
data = "Python";
data = 6174;
data = true;

console.log(data);
