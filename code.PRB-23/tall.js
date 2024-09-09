const heights = [44,54,66,75,88,16,99];

function getMax(numbers){
    let max = numbers[0];
   for(const num of numbers){
   
    if(num > max){
        max = num;
    }
}
return max;
}

const max = getMax(heights);
console.log(max);
// min
const heights1 = [22,44,54,23,79,90];
function getMin(numbers){
    const min = numbers[0];
    for(const num1 of numbers){
       
            if (min > num1){
                min = num1;
            }
        
    }
    return min;
}

const min = getMin(heights1);
console.log(min);