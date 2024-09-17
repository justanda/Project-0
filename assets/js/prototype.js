console.log("prototype.js");

//fetch products
function addToCart(id) {
  console.log("add to cart: " + id);
  localStorage.setItem("targetId", id);

  let url = "https://fakestoreapi.com/products/" + id;
  fetch(url)
    .then(function (response) {
      return response.json(); //into the format of data we can use
    })
    .then(function (data) {
      console.log(data);
    });
}

// get details about a single product
function getProductDetails() {
  console.log("getProductDetails()");
  let id = localStorage.getItem("targetId");
  console.log("targetId: " + id);
  let url = "https://fakestoreapi.com/products/" + id;
  fetch(url)
    .then(function (response) {
      return response.json(); //into the format of data we can use
    })
    .then(function (data) {
      console.log(data);
      //console.log(data.title);

      //let t = document.getElementById("title");
      //t.textContent = data.title;
      //console.log(data.title);
    });
}

//fetch products
function getProducts(filter) {
  // get product filter
  let url = "https://fakestoreapi.com/products";
  console.log(filter);

  if (filter != "all") {
    url = "https://fakestoreapi.com/products/category/" + filter;
  }
  console.log("api call:" + url);

  // fetch product records
  fetch(url)
    .then(function (response) {
      return response.json(); //into the format of data we can use
    })
    .then(function (data) {
      console.log(data); //data = [20 objects]

      // get the html target on index.html
      const productsEl = document.getElementById("products");
      productsEl.innerHTML = ""; //reset
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
        //cEl.appendChild(dscEl);

        //const aEl = document.createElement("a");
        //aEl.setAttribute("href","./product.html?id="+data[i].id);
        //aEl.textContent = "Read more";
        //cEl.appendChild(aEl);

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
      console.log(data);

      // get the html target on index.html
      const navEl = document.getElementById("catNav");
      navEl.setAttribute("style", "text-align:center; padding:10px;");
      let seEl = document.createElement("a");
      seEl.setAttribute("class", "navLi");
      seEl.setAttribute("href", 'javascript:getProducts("all")');
      //seEl.setAttribute("style","margin-left:5px;")
      seEl.textContent = "all products";
      navEl.appendChild(seEl);
      // loop values return
      for (let i = 0; i < data.length; i++) {
        // create section element
        let sEl = document.createElement("a");
        sEl.setAttribute("class", "navLi");
        sEl.setAttribute("href", 'javascript:getProducts("' + data[i] + '")');
        sEl.setAttribute("style", "padding-left:15px;");
        sEl.textContent = data[i];
        navEl.appendChild(sEl);
      }

      // remove filter
    })
    .catch(function (err) {
      console.log(err);
    });
}

createCategoryNav();
getProducts("all");
//getProductDetails();
//addButton.addEventListener('click', function () {
// if (count < 24) {
//   count++;
//   counter.textContent = count;
//   localStorage.setItem('count', count);
// }
// });
