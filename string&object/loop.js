const computer = {
    brand:  'hp',
    price: 40000,
    processor : 'intel',
    hardDisk : '500',
    monitor: 'sumsung'

}

// for of : array
// for in : object

for(const prop in computer){
    console.log(prop);
console.log(computer[prop]);
}

//old system
const keys = Object.keys(computer);
console.log(keys);

for(const key of keys){
    console.log(key,':' ,computer[key]);

    
    console.log(key,computer[key]);
}

