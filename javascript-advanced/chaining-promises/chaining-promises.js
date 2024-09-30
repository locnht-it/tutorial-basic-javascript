console.log(`Chaining-Promises Lesson`);

function getTodos(id, callback) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        const dataString = JSON.stringify(data);
        resolve(data);
      }

      if (this.readyState === 4 && request.status !== 200) {
        reject(`Something wrongs with id: ` + id);
      }
    };
    request.open(
      "GET",
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      true
    );
    request.withCredentials = true;
    // request.open("GET", "./data.json", true);
    request.send();
  });
}

getTodos(1)
  .then((data1) => {
    console.log(`>>> Get data1: `, data1);
    return getTodos(2);
  })
  .then((data2) => {
    console.log(`>>> Get data2: `, data2);
    return getTodos(3);
  })
  .then((data3) => {
    console.log(`>>> Get data3: `, data3);
  })
  .catch((error) => {
    console.log(`>>> Error: `, error);
  });
