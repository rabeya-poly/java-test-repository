
function getInfo(info){
if(typeof info !== "object"){
    return 'Invalid.Plz enter object value.......'
}
    const sentance = "amar-name:" + info.name + ',' +"basha:" + info.address;
    return sentance;
}


const person = {
    name : "Borna",
    address : "Dhaka",
    status: "single",
    age:    "bolbo nah",
    facebook: "jukkkkjj",
    phone: "019099991"
}

const result = getInfo(person);
console.log(result);