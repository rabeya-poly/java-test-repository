//Write a JavaScript code to reverse the array colors `without using the reverse method`
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
console.log(colors);

// for(let i = 0; i < colors.length; i++){
//     console.log(i);
//     console.log(colors[i]);
// }

// let i = 0;
// while(i < colors.length){
//     // console.log(i);
//     console.log(colors[i]);
//     i++;
// }
// for(const color of colors){
//     console.log(color);
// }

// console.log(colors);
// colors.reverse();
// console.log(colors);


//Answer---- 1 way


const rev_colors = [];
for(const color of colors){
    rev_colors.unshift(color)
}
console.log(rev_colors);


/// Answer -----2 way


const uta_colors = [];
for(let i = 0; i < colors.length;i++){
    const col = colors[i];
    uta_colors.unshift(col)
   
}
console.log(uta_colors);

// Answer --3 way like reverse side 
for(let i = colors.length-1 ; i>= 0; i--){
    const colo = colors[i];
    console.log(colo);
}
//--- if i want to keep it array [] in 3rd way

const rev_rev_colors = []
 for(let i = colors.length-1 ; i>= 0;i--){

    const rev = colors[i];
    console.log(rev);
    rev_rev_colors.push(rev);

 }
 console.log(rev_rev_colors);


