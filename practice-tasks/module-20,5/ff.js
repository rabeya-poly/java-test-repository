
//Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

function reverseWordsUsingReduce(s) {
    return s.split(' ').reduce((reversed, word) => word + ' ' + reversed, '').trim();
}

let s = "I am a hard working person";
console.log(reverseWordsUsingReduce(s));
