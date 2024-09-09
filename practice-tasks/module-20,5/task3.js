//Use a for...of loop to concatenate all the elements of an array into a single string.


var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// console.log(numbers);
var str = "";
for(var number of numbers){

    str += number;
}
console.log(str);