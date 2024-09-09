/*### Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.*/
const even = [];
const odd = [];
function make_avg(numbers){
   for(const number of numbers){
     if( number % 2 === 0){
        
        even.push(number);
     }
    else{
        odd.push(number);
    }
    }
    console.log('even numbers array:',even);
    console.log('odd numbers array:',odd);
    let sum = 0;
    
    for( const number of even){
        sum = sum + number; 
        
    }
    const len = even.length;
    console.log('sum of even:',sum,len);
    const avg = sum /len;
    const len1 = odd.length;
    console.log('length of odd:',len1);
    return avg;

}
const numbers = [2.2,4,7,8,9,10,13,55,1];
const result = make_avg(numbers);
console.log(result);
console.log(parseInt(result));

