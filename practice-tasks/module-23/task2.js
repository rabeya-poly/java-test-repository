/*Find the friend with the smallest name.
<br>
`const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];*/


const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const smallestName = heights2.reduce((shortest, current) => {
return current.length < shortest.length ? current : shortest;

}, heights2[0]);
console.log(smallestName);