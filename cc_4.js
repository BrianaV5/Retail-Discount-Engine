//step 2 
const products =
[
    {
    name: "laptop",
    category: "electronics",
    price: 349.99,
    inventory: 40
    },
    {
    name: "sweatshirt",
    category: "apparel",
    price: 29.99,
    inventory: 55
    },
    {
     name: "boots",
     category: "apparel",
     price: 39.99,
     inventory: 20   
    },
    {
    name: "keyboard",
    category: "electronics",
    price: 25.99,
    inventory: 35
    },
    {

     name: "cake",
     category: "groceries",
     price: 49.99,
     inventory: 15
    }
];

for (const product of products) {

let discount= 0;

switch (product.category) {
    case "electronics":
        discount = .2;
        break;
    case "apparel":
        discount = .15;
        break;
    case "groceries":
        discount = .1;
        break;
    case "household":
        discount = .1;
        break;
        default:
        break;
        }
product.promoprice = (product.price * (1 - discount)).toFixed(2);
}
//console.log(products);

//step 4
let customerType = "student";

for (const product of products) {

    let additionalDiscount = 0;
if (customerType === "student"){
   additionalDiscount = .05;
}else if (customerType === "senior") {
    additionalDiscount = .07;
} else {
    additionalDiscount = 0;
}
 product.finalprice = (product.promoprice * (1- additionalDiscount)).toFixed(2);

}
console.log(products);

//step 5 
//creating carts for 3 customers
let carts = [
{ 
    customerType: "student", items: [products[0]]
 }, 
 {
        customerType: "student", items: [products[1]]
    },
    {
        customerType: "student", items: [products[2]]
    }
];



for (let i=1; i <= 3; i++) {
    let product = carts[i-1].items[0];
    let total = product.finalprice;
    product.inventory--;
    console.log("customer "+ i + " total: " + total);
} 
//step 6 
let product = products[0]
for (const key in product) {
    console.log(`${key}: ${product[key]}`);
}
//step 7 
for (const product of products) {
    for (const[key, value]of Object.entries(product)){
        console.log(`${key}: ${value}`);
    }
}