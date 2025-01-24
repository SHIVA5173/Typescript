//! Type Guards

// Define a union type
type MyType = string | number;

// Example function with type guard
function exampleFunction(value: MyType): void {
  // Type guard using typeof
  if (typeof value === "string") {
    // Within this block, TypeScript knows that 'value' is a string
    console.log(value.toUpperCase());
  } else {
    // Within this block, TypeScript knows that 'value' is a number
    console.log(value.toFixed(2));
  }
}

// Example usage
exampleFunction("hello"); // Outputs: HELLO
exampleFunction(42); // Outputs: 42.00

//! Instance of:

class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

// Example function with instanceof type guard
function animalSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    // Within this block, TypeScript knows that 'animal' is an instance of Dog
    animal.bark();
  } else {
    // Within this block, TypeScript knows that 'animal' is an instance of Cat
    animal.meow();
  }
}

// Example usage
const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog); // Outputs: Woof!
animalSound(myCat); // Outputs: Meow!

//! Intersection Types

// Define two types
type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
  role: string;
};

// Create an intersection type
type ManagerWithEmployeeInfo = Employee & Manager;

// Example usage
const manager: ManagerWithEmployeeInfo = {
  id: 123,
  name: "John Doe",
  department: "Engineering",
  role: "Team Lead",
};

console.log(manager.id); // Outputs: 123
console.log(manager.name); // Outputs: John Doe
console.log(manager.department); // Outputs: Engineering
console.log(manager.role); // Outputs: Team Lead
