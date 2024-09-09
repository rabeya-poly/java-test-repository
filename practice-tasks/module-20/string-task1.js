//task -1
//Count how many times a string has the letter `a`

let str = 'I am the student of programming hero';
let letter = str.match(/a/gi).length;
console.log(letter);

// function count(string,char) {
//     var re = new RegExp(char,"gi");
//     return string.match(re).length;
//    }
   
//    var str = 'I will practice survival skills';
//    console.log(count(str,'i'));
