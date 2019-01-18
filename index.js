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
  console.log("h e l l o my name is M A R T A ---------> ", cartItems)
  cartItems.length < 1 ? return "Your shopping cart is empty." : listCartItems();
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
