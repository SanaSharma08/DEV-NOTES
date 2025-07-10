// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

//filter criterion 
// 1. By category (e.g., "Electronics")
const filterByCategory = category => product => product.category === category;

// 2. By minimum price (e.g., 50)
const filterByMinPrice = min => product => product.price >= min;

// 3. By maximum price (e.g., 100)
const filterByMaxPrice = max => product => product.price <= max;

// 4. By price range (e.g., 50 to 150)
const filterByPriceRange = (min, max) => product =>
  product.price >= min && product.price <= max;

// 5. By minimum rating (e.g., 4.5)
const filterByMinRating = minRating => product => product.rating >= minRating;

// 6. By name search (e.g., "lap" for "Laptop")
const filterByNameSearch = keyword => product =>
  product.name.toLowerCase().includes(keyword.toLowerCase());

// 7. By exact product name (e.g., "Shoes")
const filterByExactName = name => product => product.name === name;

// 8. By multiple categories (e.g., ["Electronics", "Books"])
const filterByCategories = categories => product =>
  categories.includes(product.category);

// 9. By top-rated products (e.g., rating >= 4.7)
const filterTopRated = product => product.rating >= 4.7;

// 10. By discounted price (if exists and <= 100)
const filterByDiscountedPrice = maxPrice => product =>
  product.discountedPrice !== undefined && product.discountedPrice <= maxPrice;


//products 
const products = [
  { name: "Laptop", category: "Electronics", price: 1200, rating: 4.5 },
  { name: "Book", category: "Books", price: 20, rating: 4.8 },
  { name: "T-shirt", category: "Clothing", price: 15, rating: 4.0 },
  { name: "Headphones", category: "Electronics", price: 150, rating: 4.3 },
  { name: "Shoes", category: "Clothing", price: 60, rating: 4.2 },
];

function filterProducts(arr,f_con){
    const newarr=arr.filter(f_con);
    return newarr;
}
let result=filterProducts(products,filterByPriceRange(50,150));
console.log(result);