console.log(`Return Lesson`);

function sum(x, y, i) {
  console.log(`1`);
  console.log(`2`);
  console.log(`3`);
  if (i === 5) return;
  console.log(`4`);
  console.log(`5`);
  return x + y;
}

console.log(`Check sum: `, sum(9, 6, 5));
