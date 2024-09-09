/*### Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.*/

function number(x){
const s = x * 2;
const w = x / 2;
if(x % 2 !== 0){
    console.log('odd number:'); 
    return s;
}
else{
  console.log('even number:');
  return w;
}

}
const result = number(22);
console.log(result);