// array
//[]

const manEat = ['sat','bat','cat','mat','bat','cat','nat'];
const number = [1,2,3,4,5,6,7,2,4,7];

function noDuplicate(array){
    const eat = [];
    for(const item of array){
if(eat.includes(item) === false)
{
    eat.push(item);
}
    }
  return eat;  
}
const eatArray = noDuplicate(number);
console.log(eatArray);