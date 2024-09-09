const persons = ['aaa','udd','fff','hhh','jjj'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

// sort -->
const number = [4,7,2,8,3,6];

/*
ascending---> [2,3,4,5.6.7.8]
descending--> [8,7,6,5,4,3,2]
*/
const numbers = [14,77,2,28,3,6];
//console.log(numbers_asc); not work

const numbers_asc = [...numbers].sort(function(a,b){return a - b})
const numbers_dsc = [...numbers].sort(function(a,b){return b - a})

console.log(numbers_asc);
console.log(numbers_dsc);


