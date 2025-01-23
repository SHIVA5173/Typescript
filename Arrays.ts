// Way-1:
//  single dimensional array:
const names: string[] = ["Shiva", "Vijay", "Chandra Mohan", "Aravind"];
const ages: number[] = [21, 22, 20, 23];
const job: boolean[] = [false, true, true, true];

console.log(names, ages, job);
console.log(names);

// 2nd dimensional array:

const freinds: string[][] = [["Shiva", "Vijay", "Chandra Mohan", "Aravind"]];
console.log(freinds);

// 3rd dimensional array:

const programmers: string[][][] = [
  [["Shiva", "Vijay", "Chandra Mohan", "Aravind"]],
];

console.log(programmers);

// way-2:

const programmerLanquages: Array<string> = [
  "HTML",
  "CSS",
  "Javascript",
  "Tailwind Css",
  "React Js",
  "MongoDB",
  "Node Js",
  "Express Js",
];

console.log(programmerLanquages);
