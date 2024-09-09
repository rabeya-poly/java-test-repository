function woodQuan(chair,table,bed){
    const perCharWood = 3;
    const perTableWood = 13;
    const perBedWood = 30;

    const cTotal = perCharWood * chair;
    const tTotal = perTableWood * table;
    const bTotal = perBedWood * bed;
    const totalWood = cTotal + tTotal +bTotal;

return totalWood;
}


const wood = woodQuan(0,0,2)
console.log(wood);
/*
*shirt price-->1000
*pant price--> 2000
*shoe price--> 5000
*/
function shoppingPrice(shirt,pant,shoe){
    const perShirtPrice = 1000;
    const perPantPrice = 2000;
    const perShoePrice = 5000;

    const sTotal = perShirtPrice * shirt;
    const pTotal = perPantPrice * pant;
    const shTotal = perShoePrice * shoe;                                                             
    const totalshopping =sTotal + pTotal + shTotal;
    return totalshopping;
}

const result1 = shoppingPrice(2,0,0);
console.log(result1);



