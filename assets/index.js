//Use Observer API as User views the sections
const nav = document.querySelectorAll('.nav');
const options = {
  threshold: 1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fixed');
    }
  });
}, options);

nav.forEach(nav => {
    observer.observe(nav);
});

//Cart
function showCart(){
    const cart = document.getElementById("cart");
    cart.classList.toggle("show");
}

function addCart(prodId){
    const productsNames = ["Festive Looks Rust Red Ribbed Velvet Long Sleeve", "Chevron Flap Crossbody Bag", "Manilla Tan Multi Plaid Oversized Fringe Scarf", "Diamante Puff Sleeve Dress - Black", "Banneth Open Front Formal Dress In Black"];
    const productPrice = ["38","5.77","29","45.99","69"];
    const productImg = ["./assets/images/item1.png","./assets/images/item2.png","./assets/images/item3.png","./assets/images/item4.png","./assets/images/item5.png"];


    if (localStorage.getItem("cart") === null){

        localStorage.setItem("cart", prodId);
    }
    else{
        var cart = localStorage.getItem("cart");
        const id = cart + "," + prodId;
        localStorage.setItem("cart", id);
    }

    document.getElementById("added-products");

    const div = document.createElement('div');

    const addToCart = document.getElementById('added-products');
    addToCart.innerHTML = '<div class="cart-product"><img src="'+ productImg[prodId] +'"><div class="prod-description"><span class="cart-prod-name">'+ productsNames[prodId] +'</span><span class="cart-prod-price">Price: $'+ productPrice[prodId] +'</span></div></div>';

    //FOR DEBUGGING PURPOSES
    localStorage.removeItem("cart");


    
}