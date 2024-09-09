const numbers = [23,33,45,67,11];
const flowers = ["gopal","belly","chamily"]
console.log(numbers);
numbers.push(100);
console.log(numbers);
numbers.pop();
console.log(numbers[3]);
const result = numbers.concat(flowers);
const result1 = result.includes("gopal");
const result2 =typeof(numbers)
console.log(result[5]);
console.log(result1);
const find = numbers.indexOf(67);
const find1 = flowers.indexOf("belly")
console.log(find);
console.log(find1);
const result3 = numbers.join('|')
console.log(result3);
console.log(typeof numbers);
console.log(typeof flowers);
const number = "jamvel,ramvel,fanvel,ranvel"
const separet = number.split("a");
console.log(separet);
console.log(typeof separet);// not use in array
console.log(Array.isArray(separet));
console.log(flowers.slice(1,3));
console.log(flowers.shift());
console.log(numbers.unshift(11));
console.log(numbers);
console.log('--------------');
let borna = ['A','B','C','D','E','F','G','I','J','K'];
// for( let i = 0; i < borna.length;i++){
//     console.log(borna[i]);
// }
for( let i = borna.length-1 ; i >= 0; i--){
        console.log(borna[i]);
    }
    console.log('---------');
let i = 0;
while(i < borna.length){
    console.log(borna[i]);
    i++;
}
console.log('----------');
let j = borna.length-1;
while(j>=0){
console.log(borna[j]);
j--;
}
console.log('------------------');
for(let boss of borna.reverse()){
    console.log(boss);

}
console.log('..............');

//loop

let number10 = [1,2,3,4,5,6];
let sum = 0;
for(let num of number10)
{
    sum += num;
}
console.log(sum);
let even = [];
let odd = [];
for(let result10 of number10){
    if(result10 % 2 === 0){
        even.push(result10)
    }
    else{
        odd.push(result10)
    }
}
console.log('..........');


const person = {
    name : "Borna",
    address : "Dhaka"
}

console.log(person.address);
console.log(person["name"]);

person.age = "34";
console.log(person);
person.status = "single";
console.log(person);

console.log('..........');

const z = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(let i = 0; i<= z.length; i++){
    if(z[i] === 8){
        continue;
    }
    console.log(z[i]);
}
console.log('------------------');
// 
const perSon = {
    name : "Borna",
    address : "Dhaka",
    status: "single",
    phone: "019099991"
}
console.log(perSon);
const keys = Object.keys(perSon);/// keys property
console.log(keys);

const values = Object.values(perSon);
console.log(values);


