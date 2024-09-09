const age = 38;
const price = 800;

if( age< 10){
    console.log('free')
}
else if (age >= 10 && age<= 36){
    const discount = price * 50 / 100 ;
    const  payAmount = price - discount ;
    console.log(payAmount)
}
else if ( age>= 37  && age <= 60){
    const discount = price * 15 / 100 ;
    const  payAmount = price - discount ;
    console.log(payAmount)
}
else{
    console.log(price);
}