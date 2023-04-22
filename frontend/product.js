const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');

const img = document.getElementById("MainImg")
const p_name = document.getElementById("p-name");
const p_price = document.getElementById("p-price");
const p_details = document.getElementById("p-details");

img.src = `./images/plants/${productId}.png`
p_name.innerHTML = `${productId}`

