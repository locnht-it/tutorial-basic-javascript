console.log(`Http-Requests Lesson`);

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4) {
    // Typical action to be performed when the document is ready:
    console.log(`>>> Check res: `, request);
  }
};
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
request.send();
