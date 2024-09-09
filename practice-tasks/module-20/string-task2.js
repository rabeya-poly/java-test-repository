//task-2
//Count how many times a string has the letter `a` or `A`
  
let str = 'I am the student of programming hero';
let letter = str.match(/a/gi).length;
let letteR = str.match(/A/gi).length;
console.log(letter);
console.log(letteR);



