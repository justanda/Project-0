const outerDiv = document.querySelector(".custom-div");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let apiData = data; //[{}, {}]

    for (let i = 0; i < apiData.length; i++) {
      //now create cards with DOM manipulation

      //create Elements
      const divRow = document.createElement("div");
      const divCard = document.createElement("div");
      const imgEl = document.createElement("img");
      const cardBody = document.createElement("div");
      const h5El = document.createElement("h5");
      const pEl = document.createElement("p");

      //set attributes
      divRow.setAttribute("class", "col");
      divCard.setAttribute("class", "card");
      imgEl.setAttribute("src", apiData[i].image);
      cardBody.setAttribute("class", "card-body");
      h5El.setAttribute("class", "card-title");
      pEl.setAttribute("class", "card-text");

      //set text content
      h5El.textContent = apiData[i].title;
      pEl.textContent = apiData[i].description;

      //append to DOM
      outerDiv.appendChild(divRow);
      divRow.appendChild(divCard);
      divCard.appendChild(imgEl);
      divCard.appendChild(cardBody);
      cardBody.appendChild(h5El);
      cardBody.appendChild(pEl);
    }
  });
