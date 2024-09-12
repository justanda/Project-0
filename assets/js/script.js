// for index html

const form = document.getElementById("userinfo");

let consumerData = [];

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  //Do something with the form data, e.g., send it to server
  console.log("Name:", name);
  console.log("Email:", email);
});
