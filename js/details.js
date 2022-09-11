const detailContainer = document.querySelector(".detail");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url ="https://rainydays.shepardavenue.online/wp-json/wc/store/products/" + id;

async function getDetails(url){
  const response = await fetch(url);
  const result = await response.json();

  products.forEach(function(product){
    detailContainer.innerHTML += ``
  })
}

getDetails(url);