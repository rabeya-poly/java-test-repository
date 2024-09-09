const word = 'i am lazy person';
console.log(word);

const pic = word.slice(2,7)
console.log(pic);

const pices = word.split('')
console.log(pices);

//divided a letter missing a
 const pIces = word.split('a')
 console.log(pIces);
//  '' dia divide 
const goru = 'rasell,masell,kasell,jasell,fasell';
const moru = goru.split(',');
console.log(moru);
  const real =[ 'rasell', 'masell', 'kasell', 'jasell', 'fasell' ]
  console.log(real.join());
  console.log(real.join('|'));
  console.log(real.join(':'));

const fs = 'Abrar';
const ls = 'Rahman';
const full = fs +' ' + ls;
// const full = fs +' +' + ls;
// const full = fs +' ,' + ls;
console.log(full);
const fullname = fs.concat(' ').concat(fs)
console.log(fullname);
console.log(ls.includes('h'));



