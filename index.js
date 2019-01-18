var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart( item ) {
  var itemDetails = getItemDetails( item )
  getCart().push( itemDetails );

  return `${ itemDetails.itemName } has been added to your cart.`
}

function getItemDetails( itemInfo ) {
  return {
    itemName: itemInfo,
    itemPrice: Math.floor( Math.random() * 100 ) + 1
  }
}

function viewCart() {
  var cartItems = getCart();
  return cartItems.length < 1 ? "Your shopping cart is empty." : listCartItems( cartItems );
}

function listCartItems( cartItems ) {
  // var cartMessage = "In your cart, you have";

  if ( cartItems.length >= 1 ) {
    var oneItem = `In your cart, you have ${ cartItems.itemName } at ${ cartItems.itemPrice }.`
  }
  // else if ( cartItems.length >= 2 ) {

  // }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
