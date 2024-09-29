console.log(`Variables-and-Block-Scope Lesson`);

// console.log(`Value x:`, x); // x: undefined
// var x = 5;
// console.log(`Value x:`, x); // x: 5

let a = 0; // a: global variable

for (let i = 0; i < 10; i++) {
  // i: local variable
  console.log(`>>> Check value i: `, i);
}
