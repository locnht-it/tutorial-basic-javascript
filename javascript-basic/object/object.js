console.log(`Object Lesson`);

// key: value
let a = {
  name: `LocNHT`,
  address: `Thu Duc City`,
  email: ``,
  gender: ``,
};
let b = `LocNHT`;

console.log(`a = {
    name: ${a.name},
    address: ${a.address}
}`);
console.log(`a = {
    name: ${a[`name`]},
    address: ${a[`address`]}
}`);
console.log(`b: ${b}`);
console.log(`Typeof a: ${typeof a}, typeof b: ${typeof b}`);

// JSON
// "{name: `LocNHT`, address: `Thu Duc City}"

let x = `name`;
a[x] = `LocNgo`; // Access the value of property `name` of object a
console.log(`a = {
    name: ${a[`name`]},
    address: ${a[`address`]}
}`);

a.x = `Ali`; // Add new property x for object a
console.log(a);
