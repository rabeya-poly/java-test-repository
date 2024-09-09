/*### Task-4  
Write Write a function called count_zero() which will take a
 binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

//  getZeros(binaryString){
   
//     for( i = 0; i < binaryString.length; i++) {
//         const zeros = 0;
//                zeros++;
//             }
//     return zeros;
// }

// const result = getZeros(101000111);
// console.log(result);


const numbers = 1100111;
const zeros1 = 0;

function count_zero(numbers){
for (i = 0; i < numbers.length; i++){
    if(numbers[i] === '0'){
    
    zeros1++; 
}
}
return zeros1;
}
const result = count_zero(numbers);
 console.log(result);


