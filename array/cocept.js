var x = 5;
var y = 22;
 var divide = x /y ;
 
  console.log(typeof divide);
  var value = divide.toFixed(2);
//   var value = parseFloat(divide.toFixed(2));
//   var value = parseInt(divide.toFixed(2));

console.log(value);

  console.log(7 + value);
  
  console.log(7 + parseFloat(value));
//   same as Number and parseFloat
  console.log(7 + Number(value))
  console.log( 7 + parseInt(value));
  



 var z = 2;
  //3^2
  console.log(z * 3)
  console.log(z ** 3)
  //modulus
// remainder
  console.log(10 % 5)
//   console.log(10 % 10)--> output 0 hobe bcz same value


//   console.log(8 % 10)---> output 8 hobe bcz 8%10 possible na


var u = 5;
// u = u + 3;
// u += 3;
// u -= 2;
u++; //1 add only
// u-- //1 minus only
console.log(u)



// isNaN is a function that check is it true/false.if not number+ not convert is output true.if  number or convert  false


// var x = "poly" --> output true
// var x = 66 /"66" ---> output false
// console.log(isNaN(x))


// Comparison operator( ===. !==, >=, <=, >, <)



var m = 6;
var n = 4;
var b = 6;
console.log(m === n)
console.log(m === b)
console.log(m !== n)
console.log(m > n)
console.log(m < n)
console.log(m >= n)
console.log(m <= n)

// differ between === and ==
// == check value 
// var x = 5; var y = 5; console.log(x == y)-->true


//=== check value and data
//  var x = 6;
//  var y = "6" 
// console.log(x === y)then --> false if y = 6 then true



// !x flip hoy true or false hoy
// var x = "";
// console.log(!x)
// !!x check for value true or false




