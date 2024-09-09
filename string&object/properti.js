const person = {
name : 'karim khan',
age: 30,
profession: 'doctor',
salary: 250000,
married: true,
'fav places' : ['abc', 'def', 'ghi','jkl']
// console.log(person.'fav places');--> show error

}
console.log(person);
//dot notation
// dot symble for object or value or value accrss 
console.log(person.profession);
const income = person.salary;
console.log(income);


//bracket notation
//third bracket 

console.log(person['age']);
const boyos = person['age'];
console.log('boyos:',boyos);
console.log(person['fav places']);





