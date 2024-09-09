function oddAverage(numbers){

const odd = [];
    for(const number of numbers){
   if(number % 2 === 1){
   
    // console.log(number);
    odd.push(number);
}
}
// only odd number 
// 
let sum = 0;

for(const number of odd){
sum = sum + number;
}
const count = odd.length;
console.log(sum,count);
const avg = sum / count;
return avg;
} 
const numbers = [7,3,13,42,33,44,55];
const avg = oddAverage(numbers);
console.log('average is:',avg);













