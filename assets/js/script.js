// for index html

const form = document.getElementById("userinfo");

function consumerData() {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    localStorage.setItem("Name:", name);
    localStorage.setItem("Email:", email);

    //Do something with the form data, e.g., send it to server
    console.log("Name:", name);
    console.log("Email:", email);
  });

  return;
}

consumerData();

fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => console.log(json));
