
function calculateSaving(income){
    if(typeof income !== "number"){
        return "Invalid......."
    }
    const house = 20000;
    const meal = 15000;
    const bus = 3000;

    const total = house + meal + bus;
    if(total > income){
        return "Earn more.koros koman.... "
    }
    const saving = income - total;
    return saving;
}

const result = calculateSaving(30000);
console.log("saving:",result);