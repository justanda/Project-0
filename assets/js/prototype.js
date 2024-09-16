console.log("prototype.js");

//fetch products
function addToCart(id) {
  console.log("add to cart: " + id);
}

//fetch products
function getProducts() {
  // fetch product records
  fetch("http://fakestoreapi.com/products")
    .then(function (response) {
      return response.json(); //into the format of data we can use
    })
    .then(function (data) {
      console.log(data); //data = [20 objects]

      // get the html target on index.html
      const productsEl = document.getElementById("products");
      console.log("productsEl");
      // loop values returned
      for (let i = 0; i < data.length; i++) {
        // create section element
        const productEl = document.createElement("section");
        productEl.setAttribute("class", "card");
        productEl.setAttribute("id", "card-" + data[i].id);
        productsEl.appendChild(productEl); //append to dom

        //get handle to card element
        const cardEl = document.getElementById("card-" + data[i].id);

        //add header element
        const h3El = document.createElement("header");
        h3El.setAttribute("class", "title");
        h3El.textContent = data[i].title;
        cardEl.appendChild(h3El);

        //add p element for description
        const descEl = document.createElement("p");
        descEl.setAttribute("class", "description");
        descEl.textContent = data[i].description;
        cardEl.appendChild(descEl);

        //add span for price
        const priceEl = document.createElement("span");
        priceEl.setAttribute("class", "price");
        priceEl.textContent = data[i].price;
        cardEl.appendChild(priceEl);

        //add product img
        const imgEl = document.createElement("img");
        imgEl.setAttribute("class", "image");
        imgEl.setAttribute("src", data[i].image);
        //priceEl.textContent = data[i].image;
        cardEl.appendChild(imgEl);

        // add span to display category
        const catEl = document.createElement("span");
        catEl.setAttribute("class", "category");
        catEl.textContent = data[i].category;
        cardEl.appendChild(catEl);

        //add button for add to cart
        const addEl = document.createElement("button");
        addEl.setAttribute("class", "addToCart");
        addEl.setAttribute("id", "add-" + data[i].id);
        addEl.setAttribute("onclick", "addToCart(" + data[i].id + ")");
        addEl.textContent = "add to cart";
        cardEl.appendChild(addEl);

        // add ahref for link to product details page
        const moreEl = document.createElement("a");
        moreEl.setAttribute("class", "product-details");
        moreEl.setAttribute("href", "./product.html?id=" + data[i].id);
        moreEl.textContent = "open product page for " + data[i].title;
        cardEl.appendChild(moreEl);

        console.log("appended to dom");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function createCategoryNav() {
  // fetch product records
  fetch("http://fakestoreapi.com/products")
    .then(function (response) {
      return response.json(); //into the format of data we can use
    })
    .then(function (data) {
      console.log(data); //data = [20 objects]

      // get the html target on index.html
      const navEl = document.getElementById("catNav");
      console.log("navEl");
      // loop values returned
      const item = [];
      for (let i = 0; i < data.length; i++) {
        item[i] = data[i].category;
        console.log(item[i]);
        console.log(item.length);

        // create section element
        const ulEl = document.createElement("ul");
        ulEl.setAttribute("class", "navUl");
        navEl.appendChild(ulEl); //append to dom

        const liEl = document.createElement("li");
        liEl.setAttribute("class", "navLi");
        liEl.textContent = data[i].category;
        ulEl.appendChild(liEl);
        //get handle to card element
        //const cardEl = document.getElementById("card-"+data[i].id);

        //add header element
        //const h3El = document.createElement("header");
        //h3El.setAttribute("class","title")
        // h3El.textContent = data[i].title;
        // cardEl.appendChild(h3El);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

getProducts();
createCategoryNav();
