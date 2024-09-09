const products = [
    {name : 'shampoo',price : 500},
    {name : 'pant',price : 100},
    {name : 'paper',price : 500},
    {name : 'pani',price : 900},
]

function getShoppingTotal(products){
let total = 0;
    for(const product of products){
    total = total + product.price;
}
return total;
}

const total = getShoppingTotal(products);
console.log(total);
