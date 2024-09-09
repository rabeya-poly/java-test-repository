const phones = [
    {name: 'Nokia',price:'40000',color:'black'},
    {name: 'Oppo',price:'30000',color:'red'},
    {name: 'Vivo',price:'15000',color:'gray'},
    {name: 'Blackberry',price:'180000',color:'black'},
    {name: 'Iphone',price:'600000',color:'black'},
]

function  getChepPhone(phones){
let min = phones[0];
for(const phone of phones){
    if(phone.price <  min.price){
        min = phone;
    }
}
return min;
}
const cheap = getChepPhone(phones);
console.log('chep phone is :',cheap);

