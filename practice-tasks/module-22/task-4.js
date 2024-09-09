//a function called count_zero() which will take a binary string (binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string in javascript

function count_zero(binaryString){
let count = 0;
for(let number of binaryString ){
    if (number === '0'){
        count++;
    }
}    
return count;
}

let binaryString = '1011110001111';
console.log(count_zero(binaryString));
