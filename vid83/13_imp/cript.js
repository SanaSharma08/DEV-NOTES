// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(arr){
    // let sum=0;
    // for (const e of arr) {
    //     sum =sum + (e.price * e.quantity);
    // }
    let total=arr.reduce((sum,product)=>{
       return sum + (product.price * product.quantity);
    },0);
    return total;
}

const products = [
  { name: "Laptop", price: 1200, quantity: 1 },
  { name: "Headphones", price: 150, quantity: 2 },
  { name: "T-shirt", price: 20, quantity: 3 },
  { name: "Book", price: 15, quantity: 4 },
  { name: "Coffee Mug", price: 12, quantity: 2 },
];

let total=calculateTotal(products);
console.log(total);
