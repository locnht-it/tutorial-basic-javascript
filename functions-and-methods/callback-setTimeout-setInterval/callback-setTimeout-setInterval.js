console.log(`Callback-setTimeout-setInterval Lesson`);

let sum = (a, b, callback) => {
  let sum = a + b;

  // setTimeout() must delay n (miliseconds) to execute this inside function
  //   setTimeout(() => {
  //     callback(sum);
  //   }, 5000);

  // setTimeout() after n (milliseconds) executes the function once and loops indefinitely
  //   setInterval(() => {
  //     callback(sum);
  //   }, 1000);

  let i = 0;
  let timer = setInterval(() => {
    callback(sum);
    i++;
    if (i === 5) clearInterval(timer);
  }, 1000);
};

let printSum = (message) => {
  console.log(`Check sum: 6 + 9 = `, message);
};

sum(6, 9, printSum);
