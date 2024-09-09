/*### Task-3: 
Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.*/

function calculateElectronicsBudget(totalBadget){
       const laptop = 35000 ;
       const tablet = 15000;
       const mobile = 20000;
       const total = laptop + tablet + mobile;
return total;

}

const result = calculateElectronicsBudget();
console.log(result);