//Reverse the words of a sentence. Only the position of the word will be reversed. check out the output




  const statement = "I am a hard working person";
console.log(statement);
let convertArray = statement.split("");
let reverseAarry = convertArray.reverse();

let newString = reverseAarry.join("");



console.log(`'${newString}'`);
console.log(newString);




// function reverseWords(statement)
// {
// let word = statement.split('');
// let reverseWords = [];
// for(let word of words){
//     reverseWords.unshift(word)
// }
// return reverseWords.join('');
// }
// let statement = 'I am a hard working person';
// let reverseStatement = reverseWords(statement);
// console.log(reverseStatement);