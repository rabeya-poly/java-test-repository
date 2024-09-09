function deleteInvalides(array){
if(!Array.isArray(array)){
    return 'invalid';
}
  let numberArray = [];
  for (let element of array){
    
if (typeof element === 'number' && isNaN(element) === false){
    numberArray.push(element);
}  
} 
return numberArray; 
}





// console.log(typeof NaN);
// console.log(isNaN(NaN));
console.log(deleteInvalides([1, null,undefined,18,-19,NaN,"12",[1,2],{ob:"lala"}]));
console.log(deleteInvalides(["1",{num:2},NaN]));
console.log(deleteInvalides([1,2,-3]));
console.log(deleteInvalides({num:[1,2,3]}));


