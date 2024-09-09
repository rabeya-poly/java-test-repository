function getMoney(){
    const pizza =1000;
    const burgar = 300;
    const juice = 123;
    const water = 20;
    const staf = 15000;
    const manegar =30000;
     const totalDaySell = (pizza * 50 ) +(burgar * 100) +(juice*100) + (water*50) ;
     const totalSalary = (staf *5)+manegar;
     const totalBadget = (totalDaySell*30) - totalSalary;
     return totalBadget;
}
console.log(getMoney());