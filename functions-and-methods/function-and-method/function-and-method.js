console.log(`Function-and-Method Lesson`);

// Function -> Free (Free means it an be anywhere, no need to be in an object or class)
// Method -> Member (A member of an object or class)

// Function
let sum = (a, b) => {
  return a + b;
};
console.log(`Check sum: 9 + 6 = `, sum(9, 6));

let obj = {
  name: `LocNHT`,
  address: `Thu Duc City`,

  // Method
  getName: function () {
    return this.name;
  },
};

console.log(`Get name obj: `, obj.getName(), obj.address);
