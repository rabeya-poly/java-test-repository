var isRain = true;

// if (isRain === true){
//     console.log( 'i will not go outside')
// }
// else {
//     console.log( 'i will  go outside')

// }

if (isRain){
    console.log( 'i will not go outside')
}
else {
    console.log( 'i will  go outside')

}

//! 
if (!isRain){
    console.log( 'i will not go outside')
}
else {
    console.log( 'i will  go outside')

}

// ternary
// condition ? if true : if false

isRain === true ? console.log( 'i will not go outside') : console.log( 'i will go outside')


var money = 40;
var isRain = true;
var taxi = 15;

if(isRain === true &&  money >= taxi){
    console.log('go to market')
}
else{
    console.log('go not to market')
}

// or ||
var money = 10;
var isRain = true;
var taxi = 15;

if(isRain === true ||  money >= taxi){
    console.log('go to market')
}
else{
    console.log('go not to market')
}
///multi level if else


var money = 40;

if(money >= 100){
    console.log('biriyani khabo')
}
else if (money >= 60){
    console.log('noodles khabo')
}
else if(money >= 40){
    console.log('somocha khabo')
}
else{
    console.log('go to home')
}
// nested 
var isSun = false;
var haveUmbrella = false;

if (isSun === true){
    if (haveUmbrella === true){
    console.log( 'i will  go outside')}
    else {
        console.log( 'i will not go outside')
    }
}
else {
    console.log( 'i will not go outside and sleep')

}


