console.log("prototype.js")

//fetch products
function addToCart(id){
    console.log("add to cart: "+id);

}

//fetch products
function getProducts() {

    // fetch product records
    fetch("http://fakestoreapi.com/products")
     .then(function (response) {
       return response.json(); //into the format of data we can use
     })
     .then(function (data) {
       console.log(data);    //data = [20 objects]
   
       // get the html target on index.html
       const productsEl = document.getElementById("products");
        console.log("productsEl");

       // loop values returned
       for (let i = 0; i < data.length; i++) {

        // create section element

        //<div class="col">
        //<div class="card mb-4 rounded-3 shadow-sm">
        //  <div class="card-header py-3">
        //    <h4 class="my-0 fw-normal">CARD</h4>
        //  </div>
       //   <div class="card-body">
        //    <h1 class="card-title pricing-card-title">
        //      $0<small class="text-body-secondary fw-light">/mo</small>
       //     </h1>
       //     <ul class="list-unstyled mt-3 mb-4">
      //        <li>10 users included</li>
       //       <li>2 GB of storage</li>
      //        <li>Email support</li>
       //       <li>Help center access</li>
        //    </ul>
       //     <button
      //        type="button"
       //       class="w-100 btn btn-lg btn-outline-primary"
       //     >
        //      Sign up for free
       //     </button>
       //   </div>
       // </div>
      //</div>

      //<div class="col">
        const colEl = document.createElement("div");
        colEl.setAttribute("class","col");
        colEl.setAttribute("id","card"+data[i].id);
        productsEl.appendChild(colEl);
        
        const cEl = document.getElementById("card"+data[i].id);
        console.log(cEl);
        const crdEl = document.createElement("div");
        crdEl.setAttribute("class","card mb-4 rounded-3 shadow-sm");
        colEl.appendChild(crdEl);

        // create card header fragment
        const cardHeadEl = document.createElement("div");
        cardHeadEl.setAttribute("class","card-header py-3");
        const cardH4El = document.createElement("h4");
        cardH4El.setAttribute("class","my-0 fw-normal");
        cardH4El.textContent = data[i].title;

        let frag = document.createDocumentFragment();
        let fi = frag
            .appendChild(cardHeadEl)  // div card-header py3
            .appendChild(cardH4El)   // h
        crdEl.appendChild(frag);


        // document fragment
       // let fragCardHead = document.createDocumentFragment();
       // let tmp1 = fragCardHead
        //   .appendChild(colEl)  //div col
       //    .appendChild(crdEl)  //div card mb4
       //    .appendChild(cardHeadEl)  // div card-header py3
      //     .appendChild(cardH4El)   // h
        //   .appendChild(cdBodyEl)
        //   .appendChild(cdPriceEl)
       //    .appendChild(dscEl)
       //    .appendChild(btnEl)
        //   .appendChild(document.createElement("li"));
        //  tmp.textContent = data[i].title; 
        //cEl.appendChild(fragCardHead);
        console.log("cEl.appendChild(fragCardHead)");

      
        // add card body fragment to col div
        const cdBodyEl = document.createElement("div");
        cdBodyEl.setAttribute("class","card-body");
        const cdPriceEl = document.createElement("h1");
        cdPriceEl.setAttribute("class","card-title pricing-card-title");
        cdPriceEl.textContent = "$"+ Number(data[i].price).toFixed(2);

        frag = document.createDocumentFragment();
        f = frag
            .appendChild(cdBodyEl)
            .appendChild(cdPriceEl)
        //    .appendChild(dscEl)
        //    .appendChild(btnEl)
        //   .appendChild(document.createElement("li"));
        //  tmp.textContent = data[i].title; 
        crdEl.appendChild(frag);

        //add p element for description
        const dscEl = document.createElement("p");
        dscEl.setAttribute("class","description");
        dscEl.textContent = data[i].description;
        cEl.appendChild(dscEl);

        //add button for add to cart
        const btnEl = document.createElement("button");
        btnEl.setAttribute("class","w-100 btn btn-lg btn-outline-primary");
        btnEl.setAttribute("id","add-"+data[i].id);
        btnEl.setAttribute("onclick","addToCart("+data[i].id+")");
        btnEl.textContent = "add to cart";
        //cardEl.appendChild(addEl);

        frag = document.createDocumentFragment();
        f = frag
            .appendChild(dscEl)
            .appendChild(btnEl)
        //    .appendChild(dscEl)
        //    .appendChild(btnEl)
        //   .appendChild(document.createElement("li"));
        //  tmp.textContent = data[i].title; 
        cdBodyEl.appendChild(frag);
        console.log(cdBodyEl);

      // const fragment = document.createDocumentFragment();
      // const tmp = fragment
       //   .appendChild(colEl)  //div col
       //   .appendChild(crdEl)  //div card mb4
       //   .appendChild(cardHeadEl)  // div card-header py3
       //   .appendChild(cardH4El)   // h4
      //    .appendChild(cdBodyEl)
      //    .appendChild(cdPriceEl)
     //  .appendChild(dscEl)
      //   .appendChild(btnEl)
     //  //   .appendChild(document.createElement("li"));
       //  tmp.textContent = data[i].title; 
      // cEl.appendChild(fragment);
  


        //<div class="card mb-4 rounded-3 shadow-sm">
        //  <div class="card-header py-3">
        //    <h4 class="my-0 fw-normal">CARD</h4>
        //  </div>
        //  <div class="card-body">
        //    <h1 class="card-title pricing-card-title">
        //      $15<small class="text-body-secondary fw-light">/mo</small>
       //     </h1>
       //     <ul class="list-unstyled mt-3 mb-4">
       //       <li>20 users included</li>
       //       <li>10 GB of storage</li>
       //       <li>Priority email support</li>
       //       <li>Help center access</li>
      //      </ul>
      //      <button type="button" class="w-100 btn btn-lg btn-primary">
      //        Get started
      //      </button>
     //  </div>


     //   const productEl = document.createElement("section");
     //   productEl.setAttribute("class","card");
     //   productEl.setAttribute("id","card-"+data[i].id);
     //   productsEl.appendChild(productEl); //append to dom

        //get handle to card element
    //    const cardEl = document.getElementById("card-"+data[i].id);

        //add header element
     //   const h3El = document.createElement("header");
     //   h3El.setAttribute("class","title")
     //   h3El.textContent = data[i].title;
    //    cardEl.appendChild(h3El);

        //add p element for description
     //   const descEl = document.createElement("p");
     //   descEl.setAttribute("class","description");
     //   descEl.textContent = data[i].description;
    //    cardEl.appendChild(descEl);

         //add span for price
     //   const priceEl = document.createElement("span");
     //   priceEl.setAttribute("class","price");
    //    priceEl.textContent = data[i].price;
    //    cardEl.appendChild(priceEl);

        //add product img
    //    const imgEl = document.createElement("img");
     //   imgEl.setAttribute("class","image");
   //     imgEl.setAttribute("src",data[i].image)
        //priceEl.textContent = data[i].image;
   //     cardEl.appendChild(imgEl);

        // add span to display category
    //    const catEl = document.createElement("span");
    //    catEl.setAttribute("class","category");
   //     catEl.textContent = data[i].category;
    //    cardEl.appendChild(catEl);

        //add button for add to cart
    //    const addEl = document.createElement("button");
    //    addEl.setAttribute("class","w-100 btn btn-lg btn-outline-primary");
    //    addEl.setAttribute("id","add-"+data[i].id);
   //     addEl.setAttribute("onclick","addToCart("+data[i].id+")");
   //     addEl.textContent = "add to cart";
   //     cardEl.appendChild(addEl);

        // add ahref for link to product details page
   //     const moreEl = document.createElement("a");
   //     moreEl.setAttribute("class","product-details");
   //     moreEl.setAttribute("href","./product.html?id=" + data[i].id);
   //     moreEl.textContent = "open product page for " + data[i].title;
   //     cardEl.appendChild(moreEl);
        console.log("appended to dom")
        

       }
     })
     .catch(function (err) {
       console.log(err);
     });
   
   }




   function createCategoryNav(){

    // fetch product records
    fetch("http://fakestoreapi.com/products")
     .then(function (response) {
       return response.json(); //into the format of data we can use
     })
     .then(function (data) {
       console.log(data);    //data = [20 objects]
   
       // get the html target on index.html
       const navEl = document.getElementById("catNav");
       console.log("navEl")
       // loop values returned
       const item = [];
       for (let i = 0; i < data.length; i++) {

        item[i] = data[i].category;
        console.log(item[i])
        console.log(item.length);

        // create section element
         const ulEl = document.createElement("ul");
         ulEl.setAttribute("class","navUl");
         navEl.appendChild(ulEl); //append to dom

         const liEl = document.createElement("li");
         liEl.setAttribute("class","navLi");
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
   //createCategoryNav();



