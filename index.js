var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemDetails = getItemDetails(item)
  getCart().push(itemDetails);

  return `${itemDetails.itemName} has been added to your cart.`
}

function getItemDetails(itemInfo) {
  return {
    itemName: itemInfo,
    itemPrice: Math.floor(Math.random() * 100) + 1
  }
}

function viewCart() {
  if ( getCart().length < 1 ) {
    return "Your shopping cart is empty.";
  }
  else if ( getCart().length >= 1 ) {
    var stringOne = `${ getCart()[ 0 ].itemName } at $${ getCart()[ 0 ].itemPrice }.`
  }
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
