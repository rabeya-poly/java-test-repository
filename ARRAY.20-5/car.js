let car = {
    make: "Toyota",
    model: "Camry",
    price: 40000,
    passengerCapacity: 5,
    isElectric: false
};

for(let key in car){
    if(car.hasOwnProperty(key)){
  let value    =  car[key]; 
  console.log('Key:   ${key},   Type of Value:  ${typeof value }');  

    }
}
