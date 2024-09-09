const person = {
    name : 'karim khan',
    age: 30,
    profession: 'doctor',
    salary: 250000,
    married: true,
    'fav places' : ['abc', 'def', 'ghi','jkl']
}

person.salary = 300000;
person['age'] = 40;
person['fav places'] = ['gore thak'];
console.log(person); 

const keyName = 'profession'
;
const propName = 'profession';
person[propName] = 'enginner'
console.log(person[keyName]);

