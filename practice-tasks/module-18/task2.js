let weight = 162;
let height = 2.7;
let  bmi = weight / (height * height);
console.log(bmi)


if( bmi<18.5){
    
    console.log('Your are underweight')
}
 
 else if ( bmi>= 18.5 && bmi<= 24.9){
    console.log('Your are normal')
}
else if ( bmi>= 25 && bmi<= 29.9){
    console.log('Your are overweight')
}
else{
    console.log('Your are obese')
}
