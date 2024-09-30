console.log(`Throwing-Errors Lesson`);

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
    request.send();
  });
}

// const getNewTodo = async (id) => {
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );
//   if (response && response.status !== 200) {
//     throw new Error(`Something wrongs with status code: ` + response.status);
//     // reject
//   }

//   let data = await response.json();
//   return data; // resolve
// };

// getNewTodo(2)
//   .then((data) => {
//     console.log(`Get data: `, data);
//   })
//   .catch((err) => {
//     console.log(`>>> Check error: `, err.message);
//   });

const getNewTodo = async (id) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    if (response && response.status !== 200) {
      throw new Error(`Something wrongs with status code: ` + response.status);
    }

    let data = await response.json();
    return data; // resolve
  } catch (e) {
    console.log(`>>> Check catch error: `, e.message); // reject
  }
};

getNewTodo(`aaaa`)
  .then((data) => {
    console.log(`Get data: `, data);
  })
  .catch((err) => {
    console.log(`>>> Check error: `, err.message);
  });
