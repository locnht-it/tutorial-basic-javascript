console.log(`Callback-Hell Lesson`);

const callback = (error, data) => {
  if (error) {
    console.log(`Calling callback with error: `, error);
  }
  if (data) {
    console.log(`Calling callback with data: `, data);
  }
};

function getTodos(id, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && request.status === 200) {
      // Typical action to be performed when the document is ready:
      //   console.log(`>>> Check res: `, request);
      const data = JSON.parse(request.responseText);
      const dataString = JSON.stringify(data);
      callback(undefined, data);
      // callback(undefined, dataString);
      // callback(undefined, request.responseText);
    }

    if (this.readyState === 4 && request.status !== 200) {
      callback("Something wrongs", undefined);
    }
  };
  request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
  request.withCredentials = true;
  // request.open("GET", "./data.json", true);
  request.send();
}

getTodos(1, (error, data) => {
  if (error) {
    console.log(`Calling callback with error: `, error);
  }
  if (data) {
    console.log(`Calling callback with data: `, data);

    getTodos(2, (error, data) => {
      if (error) {
        console.log(`Calling callback with error: `, error);
      }
      if (data) {
        console.log(`Calling callback with data: `, data);

        getTodos(3, (error, data) => {
          if (error) {
            console.log(`Calling callback with error: `, error);
          }
          if (data) {
            console.log(`Calling callback with data: `, data);
          }
        });
      }
    });
  }
});
