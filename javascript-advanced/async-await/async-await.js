console.log(`Async-Await Lesson`);

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

const getNewTodo = async (id) => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  let data = await response.json();
  return data;
};

getNewTodo(2).then((data) => {
  console.log(`Get data: `, data);
});
