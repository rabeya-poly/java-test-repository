const word = 'I  am very slow person';
let reverse = '';
for (const letter of word){
    reverse = letter + reverse;
}
console.log(reverse);