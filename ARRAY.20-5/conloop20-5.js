//LOOP
// FOR LOOP
//for (initialization; condition; afterthought)
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
  }
  

let name = ["red","green","purple","black","white"];
for(let i = 0;i <= 4;i++){
    
    console.log('name of color:',name[i]);
}




// for ( let i = 0; i<=3; i++)
// {
    
//     console.log(fruits[i]);
// }
let fruits = ["apple","banana","jam","jack fruit"];
for(let i = fruits.length-1;i>= 0;i--){
    console.log('name of fruits is:',fruits[i]);
}
let n = fruits;

while (n < fruits.length) {
 console.log(fruits[n]);
    n++;
 
}

let countrys = ['USA','UK','CANADA','AFRICA','NAPAL']
for(let country of countrys){
    console.log(country);
}


const numbers = [1,2,3,4,5,6];
let sum = 0;
for(let number of numbers){
    sum = sum + number;
    console.log('looping one by one sum:',sum);
}
console.log('total sum:',sum);

const x = 2;
console.log(x % 2 === 0);

const numbers1 = [1,2,3,4,5,6];
let even = [];
for(let item of numbers1){
    if(item % 2 === 0){
        even.push(item)
    }
}
console.log(even);
// object


const person ={
    name: 'borna',
    address:'Dhaka',
    
}
person.phone = '01773322211';
person.name = 'poly';
console.log(person);


//break
//continue
const z =[1,2,3,4,5,6,7,8,9];
for(let i = 0; i < z.length; i++){
    if(z[i] === 6){
        continue;
    }
    console.log(z[i]);
}

const pakhi = {
    choto :"hamming",
    boro : "eagal",
    food : "seeds"
}
console.log(pakhi);
const keys = Object.keys(pakhi)
console.log(keys);
const values =Object.values(pakhi)
console.log(values);