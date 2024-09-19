/**
 * Write a function that takes an array of 
 * items in a shopping cart and calculates the total price, 
 * applying a 10% discount if the total price exceeds N100. 
 * Each item has properties name, price, and quantity.
const cart = [
  { name: 'Laptop', price: 900, quantity: 1 },
  { name: 'Mouse', price: 20, quantity: 2 },
  { name: 'Keyboard', price: 50, quantity: 1 },
];

 */

const cart = [
  { name: "Laptop", price: 900, quantity: 1 },
  { name: "Mouse", price: 20, quantity: 2 },
  { name: "Keyboard", price: 50, quantity: 1 },
];

function calculateTotalPrice(cart) {
  const totalPrices = {};

  cart.forEach((item) => {
    let totalPrice = item.price * item.quantity;

    let discountedPrice = totalPrice;

    if (totalPrice > 100) {
      let discount = (10 / 100) * totalPrice;
      discountedPrice = totalPrice - discount;
    }

    totalPrices[item.name] = discountedPrice;
  });

  console.log(totalPrices);
}

calculateTotalPrice(cart);
