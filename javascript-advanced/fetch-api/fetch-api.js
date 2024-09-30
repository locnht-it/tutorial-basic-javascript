console.log(`Fetch-API Lesson`);

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

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(`Check fetch data: `, data);
  });
