console.log("prototype.js");

//fetch products
function addToCart(id) {
  console.log("add to cart: " + id);
}

//fetch products
function getProducts() {
  // fetch product records
  fetch("https://fakestoreapi.com/products")
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
        //<div class="col">
        const colEl = document.createElement("div");
        colEl.setAttribute("class", "col");
        colEl.setAttribute("id", "card" + data[i].id);
        productsEl.appendChild(colEl);

        const cEl = document.getElementById("card" + data[i].id);
        console.log(cEl);
        const crdEl = document.createElement("div");
        crdEl.setAttribute("class", "card mb-4 rounded-3 shadow-sm");
        colEl.appendChild(crdEl);

        // create card header fragment
        const cardHeadEl = document.createElement("div");
        cardHeadEl.setAttribute("class", "card-header py-3");
        const cardH4El = document.createElement("h4");
        cardH4El.setAttribute("class", "my-0 fw-normal");
        cardH4El.textContent = data[i].title;

        let frag = document.createDocumentFragment();
        let fi = frag
          .appendChild(cardHeadEl) // div card-header py3
          .appendChild(cardH4El); // h
        crdEl.appendChild(frag);
        //console.log("cEl.appendChild(fragCardHead)");

        // add card body fragment to col div
        const cdBodyEl = document.createElement("div");
        cdBodyEl.setAttribute("class", "card-body");
        const cdPriceEl = document.createElement("h1");
        cdPriceEl.setAttribute("class", "card-title pricing-card-title");
        cdPriceEl.textContent = "$" + Number(data[i].price).toFixed(2);

        frag = document.createDocumentFragment();
        f = frag.appendChild(cdBodyEl).appendChild(cdPriceEl);
        crdEl.appendChild(frag);

        //add p element for description
        const dscEl = document.createElement("p");
        dscEl.setAttribute("class", "description");
        dscEl.textContent = data[i].description;
        cEl.appendChild(dscEl);

        //add button for add to cart
        const btnEl = document.createElement("button");
        btnEl.setAttribute("class", "w-100 btn btn-lg btn-outline-primary");
        btnEl.setAttribute("id", "add-" + data[i].id);
        btnEl.setAttribute("onclick", "addToCart(" + data[i].id + ")");
        btnEl.textContent = "add to cart";
        //cardEl.appendChild(addEl);

        frag = document.createDocumentFragment();
        f = frag.appendChild(dscEl).appendChild(btnEl);
        cdBodyEl.appendChild(frag);
        console.log(cdBodyEl);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function createCategoryNav() {
  // fetch product records
  fetch("https://fakestoreapi.com/products/categories")
    .then(function (response) {
      return response.json(); //into the format of data we can use
    })
    .then(function (data) {
      console.log("have data");
      console.log(data);

      // get the html target on index.html
      const navEl = document.getElementById("catNav");
      console.log("navEl");
      // loop values return
      for (let i = 0; i < data.length; i++) {
        // create section element
        const sEl = document.createElement("a");
        sEl.setAttribute("class", "navLi");
        sEl.setAttribute("href", "javascript:location.reload()");
        sEl.textContent = data[i] + " | ";
        navEl.appendChild(sEl);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

createCategoryNav();
getProducts();
