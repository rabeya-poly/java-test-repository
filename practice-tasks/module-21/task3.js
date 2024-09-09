/* ### Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.*/
const average = array => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,2,3,4,5]));