console.log(`Destructuring-Assignment Lesson`);

// ... copy
let arr1 = [1, 2, 3, 4, 5];
console.log(`>>> Check data arr1: `, arr1);

let arr2 = [0, ...arr1, 6];
console.log(`>>> Check data arr2: `, arr2);

let state = {
  name: "LocNHT",
  address: "Thu Duc City",
};
let arr3 = { ...state, age: 21 };
console.log(`>>> Check data arr3: `, arr3);

// let name = state.name;
// let address = state.address;
// let { name, address } = state;
// console.log(`>>> Check key: `, name, address);

let a, b;
[a, b] = [1, 2];
console.log(`a = `, a, `b = `, b);

// const [name, setName] = useState(``);
let arr4 = [`LocNHT`, `Thu Duc City`];
let [name4, address4] = arr4;
console.log(`>>> Check key: `, name4, address4);
