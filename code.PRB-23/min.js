const prices = [22000,4000,5400,200000];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
       
            if (min>num){
                min = num;
            }
        
    }
    return min;
}

const chep = getMin(prices);
console.log(chep);