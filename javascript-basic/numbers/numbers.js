console.log(`Numbers Lesson`);

let a = 5; //int, float, long, double
let b = 6;
let c = 6.9;
let d = `5`;
console.log(`a =`, a, `; b =`, b, `; c =`, c);
console.log(`String d: `, d);
console.log(`a + b =`, a + b);
console.log(`a + c =`, a + c);

//In an expression where a is a number and b is a string,
console.log(`a + d =`, a + d); // 55
console.log(`a - d =`, a - d); // 0
console.log(`a * d =`, a * d); // 25
console.log(`a / d =`, a / d); // 1

console.log(`a === d? `, a === d, `typeof a:`, typeof a, `typeof d:`, typeof d);

//let e = Number(d);
let e = +d; // cast from string to number
console.log(`a === e? `, a === e, `typeof a:`, typeof a, `typeof e:`, typeof e);
