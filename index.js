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
  return getCart().length < 1 ? "Your shopping cart is empty." : listCartItems();
}

function listCartItems() {
  var cartMessage = 'In your cart, you have '

  if ( getCart().length >=  1 ) {
    cartMessage += `${getCart()[ 0 ].itemName} at $${getCart()[ 0 ].itemPrice}.`
  }
  if ( getCart().length >= 2 ) {
    for ( var i = 1; i < getCart().length - 1; i++ ) {
      cartMessage += `${getCart()[1].itemName} at $${getCart()[1].itemPrice},`
      cartMessage +=  `and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
    }
    if ( getCart().length >= 3 ) {
      cartMessage += `${getCart()[3].itemName} at $${getCart()[3].itemPrice}.`
    }
  }

  return `${cartMessage}`;
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
