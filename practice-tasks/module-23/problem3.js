const person = {
    name : "Borna",
    address : "Dhaka",
    status: "single",
    age:    "bolbo nah",
    facebook: "gmail",
    
    phone: "019099991"
}

//output: borna@gmail.com

function createEmail(info){
    if(typeof info !== 'object'){
        return 'Invalid.plz give the object......'
    }
    const result = info.name+'@'+info.facebook+'.com';
    return result;
}

const finalResult = createEmail(person);
console.log(finalResult);
