console.log(`Promises Lesson`);

// Promise Example

const promiseExp = () => {
  return new Promise((resolve, reject) => {
    //resolve({ name: `LocNHT`, address: `Thu Duc City` });
    reject(`Something wrongs`);
  });
};

promiseExp()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

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
        reject(`Something wrongs`);
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
  .then((data) => {
    console.log(`>>> Get data: `, data);

    getTodos(2).then((data) => {
      console.log(`>>> Get data 2: `, data);
    });
  })
  .catch((error) => {
    console.log(`>>> Error: `, error);
  });
