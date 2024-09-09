const products = [
    {name : 'shampoo',price : 500, quantity: 1},
    {name : 'pant',   price : 100, quantity: 2},
    {name : 'paper',  price : 500, quantity: 1},
    {name : 'pani',   price : 900, quantity: 3},
]
 
function cartTotal(products){
    let total = 0;
    for(const product of products){
        const cost = product.price * product.quantity;
        total = total + cost;
    }
    return total;
}


const shopCost = cartTotal(products);


console.log(shopCost);