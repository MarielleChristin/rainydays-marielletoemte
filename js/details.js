const detailContainer = document.querySelector(".detail");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("productID");

console.log(id);

const url ="https://rainydays.shepardavenue.online/wp-json/wc/store/products/" + id;

async function getDetails(url){
  const response = await fetch(url);
  const result = await response.json();

  console.log(result);

  detailContainer.innerHTML = `
  <section class="product-grid">
  <div class="small">
      <div class="tiny"><img src="${result.images[1].src}"></div>
      <div class="tiny"><img src="${result.images[2].src}"></div>
      <div class="tiny"><img src="${result.images[3].src}"></div>
  </div>
  <div class="large">
      <img src="${result.images[0].src}">
  </div>
</section>
<section class="about-product">
 <div class="product-text">
     <h2>${result.name}</h2>
     <p>${result.prices.price}${result.prices.currency_code}</p>
     <p>${result.description}</p>
 </div>
 <div class="form">
 <label for="color">Color:</label>
 <select id="color-product">
  <option value="">Choose an option</option>
  <option value="${result.attributes[0]}">${result.attributes[0].terms[0].name}</option>
 </select>
 <label for="size">Size:</label>
 <select id="size">
  <option value="">Choose an option</option>
  <option value="${result.attributes[1]}">${result.attributes[1].terms[0].name}</option>
  <option value="${result.attributes[1]}">${result.attributes[1].terms[1].name}</option>
  <option value="${result.attributes[1]}">${result.attributes[1].terms[2].name}</option>
  <option value="${result.attributes[1]}">${result.attributes[1].terms[3].name}</option>
  <option value="${result.attributes[1]}">${result.attributes[1].terms[4].name}</option>
  <option value="${result.attributes[1]}">${result.attributes[1].terms[5].name}</option>
 </select>
 <a href="checkout.html"><button class="addtocart" type="submit" value="productID">Add to cart</button></a>
 </form>
 </div>
  `

}

getDetails(url);