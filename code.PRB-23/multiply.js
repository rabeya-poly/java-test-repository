function multiply(num1,num2){
    if(typeof num1 !==  'number' ||typeof num2 !== "number"){
        return ' plz nummber';

    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply('5', 'seven');
console.log(result);
//

function fullname(frist,last){
   if(typeof frist !== 'string'){
    return 'frist name given like string'
   }
   else if(typeof last !== 'string' ){
    return 'last name given like string'
   }
   
    const full = frist +  ' ' + last;
    return full;
}
//const full = fullname( 7, 9);
const full = fullname( 'borna', 'borna');
console.log(full);

//

function getPrice(product){
   //console.log(typeof product);
if(typeof product !== 'object'){
    return 'plz provide an object'
}
    const price = product.price;
    return price;
}


// const price = getPhone({name : 'oil', price: '1200', kg: '5liter'});
const price = getPrice(4)
console.log(price);

function getSecond(number){
     if(Array.isArray(number) === false){
        return ' plz give array';
     }
    
    const second = number[1];
    return second;
}
const second = getSecond([22,33,22]);
console.log(second)
  

