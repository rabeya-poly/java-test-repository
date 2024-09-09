// Write a while loop that adds numbers starting from 1, but 
//stops (using break) as soon as the sum reaches or exceeds 100
sum = 0;
for(let i = 1; i <= 100; i++){
    
    console.log('Number:',i);
    sum = sum + i;
    console.log('Sum of number:',sum);
if(sum >= 100){
    break;
}
}