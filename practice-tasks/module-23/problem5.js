

const x = [2,3,true,false,"hello", false,11,43,{name :"nan"},"hi"];


function countBoolean(array){
    if(!Array.isArray(array)){
        return 'invalid';
    }
    let count = 0;
    for(let item of array){
        if(typeof item === "boolean"){
            count++;
        }
    }
    return count;
}
const result = countBoolean(x)
console.log(result);