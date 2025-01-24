// Declaration And Merging:

// original InterFace:

interface Book {
  Name: string;
  Author: string;
  Cost: number;
}

// re-opening: without changing origina interface

interface Book {
  Size: string;
  isAvailable: boolean;
}

const HarryPotter: Book = {
  Name: "Harry Potter",
  Author: "J. K. Rowling",
  Cost: 8569000,
  Size: "256cm * 1300cm",
  isAvailable: true,
};

console.log(HarryPotter);
