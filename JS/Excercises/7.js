/**
 * Write a function that takes an array of objects representing inventory items and 
 * prints the total quantity of each item. 
 * Each object has properties name and quantity.
 * const inventory = [
  { name: 'Apple', quantity: 10 },
  { name: 'Banana', quantity: 5 },
  { name: 'Apple', quantity: 15 },
  { name: 'Orange', quantity: 20 },
];
 */

const inventory = [
  { name: "Apple", quantity: 10 },
  { name: "Banana", quantity: 5 },
  { name: "Apple", quantity: 15 },
  { name: "Orange", quantity: 20 },
];

function totalQuantity(inventory) {
  const totalQuantities = {};

  inventory.forEach((item) => {
    // console.log(totalQuantities[item.name]); //totalQuantities["Apple"]
    if (totalQuantities[item.name] == undefined) {
      totalQuantities[item.name] = item.quantity;
    } else {
      totalQuantities[item.name] += item.quantity;
    }
  });

  console.log(totalQuantities);
}

totalQuantity(inventory);
