function add(num1,num2){
    return num1 + num2 }

function suntract(num1,num2){
    return num1 * num2;
}

function multiply(num1,num2){
    return num1 * num2; }

    
    function divition(num1,num2){
        return num1 / num2; 
}


function calculator(a,b,operation){
    if(operation === 'add'){
        const result = add(a,b);
    return result;
    }
    else if(operation === 'subtract'){
        const result = suntract(a,b);
        return result;
    }
    else if(operation === 'multiply'){
        return multiply(a,b);
    }
    else if( operation === 'divition'){
        return divition(a,b);
    }
    else{
        return " only 'add','subtract','multiply','divition' is allowed."
    }
}

const result = calculator(5,7,'add');
console.log(result);
