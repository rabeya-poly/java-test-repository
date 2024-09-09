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