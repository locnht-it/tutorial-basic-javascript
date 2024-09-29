console.log(`While-Loops-and-Do-While-Loops Lesson`);

let top4 = [`Man City`, `Liverpool`, `MU`, `Chelsea`];

console.log(`For Loop`);
// Using when know the number of iterations
for (let i = 0; i < top4.length; i++) {
  console.log(`Top ${i + 1}: ${top4[i]}`);
}

console.log(`While Loop`);
let i = 0;
// Using when don't know the number of iterations
let flag = false;
while (!flag) {
  console.log(`Check value i: `, i);
  i++;
  if (i === 10) flag = true;
}

console.log(`Do While Loop`);
i = 0;
do {
  console.log(`Top ${i + 1}: ${top4[i]}`);
  i++;
} while (i < top4.length);
