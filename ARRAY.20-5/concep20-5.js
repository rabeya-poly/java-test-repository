const numbers = [22,44,55,77,88,99];
console.log(numbers);

//counting element
console.log(numbers.length);
// add number 100 by push()
numbers.push(100);
console.log(numbers);

//not show number pop() only for  one number LAST ELEMENT DELETE
// store for pop()--> let x = numbers.pop();console.log(x)
numbers.pop();
console.log(numbers);
// find out any element then 


const c = numbers[1]
console.log(c);

// add to array in one line USE CONCAT()
const flowers = ["rose","tulip","belly"];
const fruits = ["apple","banana"];
const xy = flowers.concat(fruits);

/*  more element add in one line then use like as--->
 const num = [44,55];
 const xy = flowers.concat(fruits,num);*/
console.log(xy);
// find any element -->console.log(xy[1]);output:tulip
//find indexof element
const find = fruits.indexOf("banana");
console.log(find);//any element that does not exits ex: fruits.indexOf("jam") ;output: -1
//find out element true/false

console.log(xy.includes("apple"));

// ARRAY TO STRING LIKE:const fruits = ["apple","banana","jam"];--->const fruits = "apple,banana,jam";

const fol = ["apple","banana","jam","jack fruit"];
const fal = fol.join();
//const fal = fol.join('|');const fal = fol.join('/ ');ouput:apple/banana/jam/jack fruit
console.log(fal);//check type--->console.log(tupeof fal);

// separate element
const string = "mala,jala,kala,bala";
// const convert = string.split("")//output:['m', 'a', 'l', 'a', ',',]
// const convert = string.split(" ") //output:[ 'mala,jala,kala,bala' ]
//const convert = string.split("a")// output
  const convert = string.split('a') //output:[ 'mala','jala','kala','bala' ]                                     
console.log(convert);

//array check korte typeOf use korle Ojbect ahse
console.log(typeof convert); //-->output:object 
console.log(Array.isArray (convert)); // output:true Use>> Array.isAraay()

const cut = ["red","green","purple","black","white"];
console.log(cut.slice(1,4));

console.log(cut.shift());// delete 1st element must cnsole.log after-->
console.log(cut);
//added element start like
cut.unshift("gray","blue")
console.log(cut);


