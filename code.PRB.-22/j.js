function inchHeght(inch){
const feet = inch /12;
return feet;
}
const priyaHeight = inchHeght(70);
console.log(priyaHeight);

// to feet to inch

function inchHeght2(inch){
    const feetFunction = inch / 12;
    const inchRemainderFeet = inch % 12;
    const height = parseInt(feetFunction) + ' feet ' +inchRemainderFeet +' inch ';
    return height; 
}
const result2 = inchHeght2(90);
console.log('Priya er height:',result2);


