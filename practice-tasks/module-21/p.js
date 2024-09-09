// function num(numbers){
//     const len = numbers;
//     return len;
// }
// let result= num([2,4,6,7]);
// console.log(result);
// function sumNumbers(){
// return (avg);
// }
// const sum = sumNumbers[2,3,4,5];
// console.log(sum);



// const average = array => array.reduce((a, b) => a + b) / array.length;
// console.log(average([1,2,3,4,5]));
function count(str) {
    var countForZero = 0;
    var countForOne = 0;
  
    for (var i = 0, length = str.length; i < length; i++) {
      if (str[i] === '0') {
        countForZero++;
      }
      else {
        countForOne++;
      }
    }
  
    return {
      'zero': countForZero,
      'One': countForOne
    };
  }
  
  let integer = count(110);
  console.log(integer);