const jim = 56;
const tim = 89;
const kim = 60;

if( jim > tim && jim > kim){
    console.log('jim big');
}
else if( tim > jim && tim > kim){
   console.log('tim is big'); 
}
else{
    console.log('kim is big');
}


function maxOfThree(num1,num2,num3){
    if(num1 > num2 && num1 >num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}


const result = maxOfThree(33,81,10);
console.log(result);