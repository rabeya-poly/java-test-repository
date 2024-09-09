function inchToFeet(inch){
    const feet = inch /12;
    return feet;
}
const shuvoHeight  = inchToFeet(75);
console.log(shuvoHeight);

// integer to convert


function inchToFeet2(inch){
    const feetFunction  = inch / 12;
    const feetNumber = parseInt(feetFunction);
    const inchRemaing = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaing + ' inch. '

return result;
}
const priyaHeight = inchToFeet2(75);
console.log(priyaHeight);

//mile to kilomiter

function mileToKilometer(mile){
const kilo = mile * 1.60934;
return kilo;
}
const runEveryday = mileToKilometer(2);
console.log(runEveryday,'kilo miter');




