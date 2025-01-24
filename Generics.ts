// ------------- Without Generics -------------
// function printNumber(item: number, defaultValue: number): [number, number] {
//   return [item, defaultValue];
// }

// function printString(item: string, defaultValue: string): [string, string] {
//   return [item, defaultValue];
// }

// function printBoolean(
//   item: boolean,
//   defaultValue: boolean
// ): [boolean, boolean] {
//   return [item, defaultValue];
// }

// Example usage
// const num = printNumber(42, 0);
// console.log(num); // Outputs: [42, 0]

// const str = printString("hello", "world");
// console.log(str); // Outputs: ['hello', 'world']

// const bool = printBoolean(true, false);
// console.log(bool); // Outputs: [true, false]
// -----------------------------------

// --------------- Using Generics ---------------
function uniqueDataTypeFunc<Type>(
  item: Type,
  defaultValue: Type
): [Type, Type] {
  return [item, defaultValue];
}

// Example usage
const num = uniqueDataTypeFunc<number>(42, 0);
console.log(num); // Outputs: [42, 0]

const str = uniqueDataTypeFunc<string>("hello", "world");
console.log(str); // Outputs: ['hello', 'world']

// Example usage with a custom type
interface Dog {
  name: string;
  breed: string;
}

const dogPair = uniqueDataTypeFunc<Dog>(
  { name: "Buddy", breed: "Labrador" },
  { name: "Default", breed: "Unknown" }
);

console.log(dogPair); // Outputs: [{ name: 'Buddy', breed: 'Labrador' }, { name: 'Default', breed: 'Unknown' }]

// Type constraint using the 'extends' keyword
interface Identifiable {
  id: number;
}

// Generic function with a type constraint
function mergeObjects<T extends Identifiable, U extends Record<string, any>>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

// Example usage
const object1 = { id: 1, name: "Object 1" };
const object2 = { id: 2, description: "Object 2" };

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);
// Outputs: { id: 1, name: 'Object 1', description: 'Object 2' }

// Generic class
class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

// Example usage
const stringBox = new Box<string>("Hello, TypeScript!");
console.log(stringBox.getContent()); // Outputs: Hello, TypeScript!
stringBox.setContent("New content");
console.log(stringBox.getContent()); // Outputs: New content

const numberBox = new Box<number>(42);
console.log(numberBox.getContent()); // Outputs: 42
numberBox.setContent(99);
console.log(numberBox.getContent()); // Outputs: 99
