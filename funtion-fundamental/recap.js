function add(price1,price2){
    const total = price1 + price2;
    return total;
}
const bill = add(5, 80);
console.log(bill);


function add1(price1,price2){
    return price1 + price2;
}
const bill2 = add(15, 80);
console.log(bill2);
console.log(bill,bill2);

function doMath(num1,num2){
    const sum = num1 + num2;
    const difference = num1 - num2;
    const multiply = sum * difference;
    const result = multiply / 2;
    return result;
}
const result = doMath(10,5);
console.log(result);



