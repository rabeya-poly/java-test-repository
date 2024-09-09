//### Task-2
//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function numbers(number){
    if(number % 2 !== 0){
    const  num1 = number * 2;
      return num1;
    }
    else{
      const  num2 = number / 2;
        return num2;
    }
    
}
const result = numbers(43);
console.log(result);