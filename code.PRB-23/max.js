const disha = 56;
const salman = 34;
if(disha > salman)
{
    console.log("disha will get the strawberry");
}
else{
    console.log('salmal will get the  strawberry');
}
//function

function getMax(num1,num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max = getMax(36,30);
const max1 = getMax(66,30);
const max2 = getMax(86,30);
const result =getMax(max1,max2)
console.log(result);
console.log(max1,max2);
console.log('max of two is:', max);

