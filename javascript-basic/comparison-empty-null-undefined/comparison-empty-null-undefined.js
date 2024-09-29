console.log(`Comparison-Empty-Null-Undefined Lesson`);

let a = 5; // x <- y
let b = `5`;

console.log(`a = ${a}, typeof a: ${typeof a}
b = ${b}, typeof b: ${typeof b}`);
console.log(`a == b? ${a == b}`); // ==: value
console.log(`a === b? ${a === b}`); // ===: type, value

// Empty
let c1 = [],
  c2 = {},
  c3 = ``;
console.log(`Check value c1: `, c1);

// Undefined
let d;
console.log(`Check value d: `, d);

// Null
let e = null;
console.log(`Check value e: `, e);
