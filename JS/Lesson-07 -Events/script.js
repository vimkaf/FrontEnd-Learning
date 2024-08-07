function doSomething() {
  alert("I am doing something");
}

function mouseovered(element, event) {
  element.style.background = "red";
  element.style.cursor = "pointer";

  console.log(event);
}

function mouseleft(element) {
  element.style.background = "green";
}

function login(event, element) {
  console.log(element);
  if (event.isTrusted) {
    // perform the login action
  }
}

function pageloaded(event) {
  alert("page is ready");
  console.log(event);
}
