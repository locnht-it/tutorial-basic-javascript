console.log(`Filter-Find Lesson`);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [
  { name: `LocNHT`, age: 25 },
  { name: `TrungBui`, age: 29 },
  { name: `NamLee`, age: 25 },
  { name: `HieuHa`, age: 24 },
  { name: `MinhTa`, age: 35 },
];

// Filter() method creates a new array with all elements that pass the test implemented by the provided function
let filter = arr.filter((item, index) => {
  console.log(`>>> Check filter: item: `, item, `index: `, index);
  return item && item > 5;
});

console.log(filter);

let filter2 = arr2.filter((item, index) => {
  return item && item.age === 25;
});
console.log(filter2);

// Find() method returns the value of the first element in the provided array that satisfies the provided testing function
let find = arr2.find((item, index) => {
  return item && item.age === 25;
});
console.log(find);
