const url ="https://rainydays.shepardavenue.online/wp-json/wc/store/products?category=22";
const productContainer = document.querySelector(".products");

async function getProducts(url){
  const response = await fetch(url);
  const products = await response.json();

  products.forEach(function(product){
    productContainer.innerHTML += ` 
    <div class="jacket"> 
    <a href="womensjacket.html?productID=${product.id}">
    <div class="image"> <img src="${product.images[0].src}"><div> 
    <div class="product-title"><h2>${product.name}</h2></div>
    <div class="price">${product.prices.regular_price}</div>
    <a/>
    </div>`
  })
}

getProducts(url);