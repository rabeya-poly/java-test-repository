function calculateMoney(ticketSale){
   
   if(ticketSale < 0 || typeof ticketSale !== 'number'){
    return 'Invalid Number.plz give the string number.';
   }
   
    // let remaingAmount = (ticketSale * 120) - (500 + (8 * 50));
    // return remaingAmount;
    return (ticketSale * 120) - (500 + (8 * 50));
}
let result = calculateMoney(10);
let result1 = calculateMoney(1055);
let result2 = calculateMoney(93);
let result3 = calculateMoney(-10);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);