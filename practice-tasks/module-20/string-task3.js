//Task-3: 

//Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 


let str = 'I love food';
let letter = str.match(/[aeiou]/gi).length;
console.log('number of vowel letter is:',letter);