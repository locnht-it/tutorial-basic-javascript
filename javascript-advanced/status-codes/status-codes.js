console.log(`Status-Codes Lesson`);

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4 && request.status === 200) {
    // Typical action to be performed when the document is ready:
    console.log(`>>> Check res: `, request);
  } else {
    console.log(`>>> Status: `, request.status);
  }
};
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
request.send();
