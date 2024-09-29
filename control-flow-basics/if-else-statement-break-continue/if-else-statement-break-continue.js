console.log(`If-Else-Statement-Break-Continue Lesson`);

let top4 = [`Liver`, `Chelsea`, `Mu`, `Man City`];

let i = 0;
// Break exit the loop
console.log(`Break`);
while (i < top4.length) {
  console.log(`>>> Check i: `, i);
  if (top4[i] === `Chelsea`) {
    console.log(`Found it: `, top4[i]);
    break;
  }
  i++;
}

// Continue skip the remaining statements in the loop and continue to the next iteration of the loop.
console.log(`Continue`);
i = 0;
while (i < top4.length) {
  i++;
  if (top4[i] === `Chelsea`) {
    console.log(`Found it: `, top4[i]);
    continue;
  }
  console.log(`>>> Check i: `, i);
}
