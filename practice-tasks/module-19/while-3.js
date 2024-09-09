// sum of the odd number from 81 to 131 
 
 let number = 81;

 let sum = 0;
 while(number  <  131 ){
 

 if( number  % 2 !== 0){

    console.log('odd number is:',number);
 }
 
 number++;
 sum = sum + number; 
}

console.log('Sum of all the odd number from 81 to 131 is:',sum);
 
// sum fo all the even numbers from 206 to 311

let num = 206;
let sum1 = 0;

while(num < 311){

    if(num % 2 === 0 ){
        console.log('even number is:',num);
    }
    num++;
sum1 = sum1 + num;
}
console.log('Sum fo all the even numbers from 206 to 311',sum1);




 