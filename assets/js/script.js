// for index html

console.log("project-0");




function getProducts(){

 fetch("http://fakestoreapi.com/products")
  .then(function (response) {
    return response.json(); //into the format of data we can use
  })
  .then(function (data) {
    //data = [20 objects]
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      //DOM MANIPULATION
      //create an LI for each object
      const liEl = document.createElement("li");
 
      //Create an element
      //Do something with that element
      //add text content to each LI
      liEl.textContent = data[i].title;
  
      //append to DOM
      ulEl.appendChild(liEl);
    }
  })
  .catch(function (err) {
    console.log(err);
  });

}
getProducts();

//fetch( "https://fakestoreapi.com/products" ) 
//            .then( (response) => response.json() )
            //.then((response) => response.json())`1
 //           .then( (json) => console.log(json) );

//const jsProductVariable = JSON.parse(jsonObj);
//console.log(typeof(jsonObj));
//console.log(JSON.parse(jsonObj));


//fetch()

//const ulEl = document.getElementById("product-title");


// PSEUDO CODE
//=========================================
// declare products array - contains an array of product objects
//const productsArr[];

// declare product object { }


// declare function to retrieve products from api
//function getFromAPI(){ 
    // fetch products via fakestoreapi

 //   const arr[] = fetch( "https://fakestoreapi.com/products" )
  //      .then( (response) => response.json() )
   ///     .then( (json) => console.log(json) )
//
//
  //      console.log (arr[])
//    return 
//}

// function fetchProducts ( ){

    // try retrieving the product list
    // promise variables
    // return products array;

//}

// fetch()
// id:1,
//                title:'...',
//                 price:'...',
//                 category:'...',
   //                 description:'...',
   //                 image:'...'
// instantiate products array


//getFromAPI();

// public function for other pages and javascripts 
//function getProducts() {

    // get product objects from fakestoreapi
    // const fakeProductsJSON[] = getFromApi("https://fakestoreapi.com/products");
    // json.stringify? read json into javascript objects

    // for each product returned
        // create a product object
        // set keys
        // add it to the products array




    // 


    // return productsArr[];

//}
//  END API.JS








// for product html  (formerly product.js)






// for cart html (formerly cart.js)












