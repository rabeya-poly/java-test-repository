// ternary--> 3part


// const age = 10;
// if (age >= 18){
//     console.log('you can do')
// }
// else {
//     console.log( 'sleep')
// }
//  const age = 12;
//  age >= 18 ? console.log('you can do') : console.log('sleep')
let price = 500;
const isLeader = true;
if(isLeader === true){
    price = 0;

}
else {
    price = price + 100;
}
// console.log(price)

price = isLeader === true ? 0 : price + 100;