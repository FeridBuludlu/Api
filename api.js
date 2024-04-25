const artanBtn = document.getElementById('artan');
const azalanBtn = document.getElementById('az');

artanBtn.addEventListener('click', sortArtan);
azalanBtn.addEventListener('click', sortAzalan);

async function fetchAndDisplayProducts() {
  try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      displayProducts(products);
  } catch (error) {
      console.error('Error fetching products:', error);
  }
}

function displayProducts(products) {
  container.innerHTML = '';
  products.forEach(product => {
      container.innerHTML += `
      <div class="card">
          <img src="${product.image}" alt="">
          <h2>${product.title}</h2>
          <p>Price: ${product.price}$</p>
          <p>${product.description}</p>
      </div>`;
  });
}

async function sortArtan() {
  const response = await fetch("https://fakestoreapi.com/products?sort=asc");
  const products = await response.json();
  displayProducts(products);
}

async function sortAzalan() {
  const response = await fetch("https://fakestoreapi.com/products?sort=desc");
  const products = await response.json();
  displayProducts(products);
}


const container = document.querySelector('.container')

fetchAndDisplayProducts();