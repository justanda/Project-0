// for index html

console.log("project-0");




// FORMERLY API JS
// holds api

// will perform the fetch of all products from fakestore.. other apis as needed
// create and return array of product objects
// other API functions

fetch( "https://fakestoreapi.com/products" )
        .then( (response) => response.json() )
        //.then((response) => response.json())
        .then( (json) => console.log(json) )


// PSEUDO CODE
//=========================================
// declare products array - contains an array of product objects
//const productsArr[];

// declare product object { }
//const product = {
//    id: "", //fakestore unique id
//    title: "", //fakestore title
//    category: "", //fakestore category
//    description: "", //fakestore description
//    image: "" //img url
//}

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












