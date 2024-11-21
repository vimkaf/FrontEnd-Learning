document.addEventListener("DOMContentLoaded", function () {
  console.log("The html document has finished loading");
  console.log(document);
  const header = document.getElementById("header");
  console.log(header.innerText);
  header.innerText = "How far";
  console.log(header.innerText);

  header.style = "color:red; border:2px solid green";

  const welcomeTag = document.getElementById("welcome");
  welcomeTag.innerHTML = "<h3>Welcome to my world</h3>";

  const container = document.getElementsByClassName("container");
  console.log(container);

  const header2 = document.querySelector("#header");
  console.log(header2);

  const container2 = document.querySelectorAll(".container");
  console.log(container2);

  const firstName = document.getElementsByName("firstName");
  console.log(firstName);

  const allParagraphs = document.getElementsByTagName("p");

  console.log(allParagraphs);

  firstName[0].type = "password";
  console.log();

  const image = document.getElementById("image");
  console.log(image);
  image.width = "140";
  image.height = "250";

  console.log(image.getAttribute('width'));
  console.log(image.attributes);
  
  
});
