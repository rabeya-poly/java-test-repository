/*### Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.*/




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