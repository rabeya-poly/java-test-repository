const numbers = [2,4,21,5,6,23,20,9];
let biggest = numbers[0];

for( let i = 1; i < numbers.length;  i++){
    if(numbers[i] > biggest){
        biggest = numbers[i];
    }
}
console.log(biggest);
const getMaxNumber = Math.max(...numbers);
console.log(getMaxNumber);

console.log('--------------------------------');
// function



function getAge(array){
    if(!Array.isArray(array)){
        return "It's ok.it is not array.error"
    }
let biggest = array[0];
for(i = 1; i < array.length;i++){
    if(array[i] > biggest) {
        biggest = array[i];
    }
}
return biggest;
} 
const age = [1.3,45,79,90];
const result = getAge(age);
console.log(result);