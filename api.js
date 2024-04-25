const container = document.querySelector(".container");
const artanButton = document.getElementById("artan");
const azalanButton = document.getElementById("az");

const renderProducts = (productsArray) => {
  container.innerHTML = "";
  for (let i = 0; i < productsArray.length; i++) {
    const product = productsArray[i];
    container.innerHTML += `
        <div class="card">
          <img src="${product.image}" alt="">
          <h2>${product.title}</h2>
          <p>Price: ${product.price}$</p>
          <p>${product.description}</p>
        </div>
      `;
  }
};

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((json) => {
    renderProducts(json);
  });

artanButton.addEventListener("click", (e)=> {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => {
      let list = [...json];
      list.sort((a, b) => a.price - b.price);
      renderProducts(list);
    });
});

azalanButton.addEventListener("click",(e)=>  {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => {
      let list = [...json];
      list.sort((a, b) => b.price - a.price);
      renderProducts(list);
    });
});



