/*### Task -1: 
Find the lowest number in the array below.
<br>
`const heights2 = [167, 190, 120, 165, 137];`*/

const heights2 = [167, 190, 120, 165, 137];
const getHeight = Math.min(...heights2);
const getHeight1 =Math.max(...heights2);

console.log("The lowest number in the array",getHeight);
console.log('The highest number in the array',getHeight1);