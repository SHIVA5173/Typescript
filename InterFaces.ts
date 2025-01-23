// Objects

interface Computer {
  name: string;
  ram: number;
  ssd: number;
  core: string;
}

const HpLaptop: Computer = {
  name: "HpLaptop",
  ram: 16,
  ssd: 512,
  core: "I7",
};

console.log(HpLaptop);

// functions:

interface MathOperation {
  (x: number, y: number): number;
}

const sum: MathOperation = (a, b) => a + b;
const sub: MathOperation = (a, b) => a - b;
const multi: MathOperation = (a, b) => a * b;

console.log(sum(10, 20));
console.log(sub(10, 20));
console.log(multi(10, 20));

// classes:

interface Car {
  start(): void;
  stop(): void;
}

class Lamboghini implements Car {
  start(): void {
    console.log("Lamboghini Is Started.... :)");
  }

  stop(): void {
    console.log("Lamboghini Is stoped.... :)");
  }
}

const lambo = new Lamboghini();
lambo.start();
lambo.stop();
