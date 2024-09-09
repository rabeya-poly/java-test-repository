function rickshawCost(people){
    const bus = 50;
    const micro = 15;
    const ricksaCost = 20;
 
     const remainAfterBus= people % bus ;
     const remainAftermicro = remainAfterBus % micro ;
     return remainAftermicro * 20;
}
const result = rickshawCost(234)
console.log(result);