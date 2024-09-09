/// Leap Year--> simple way

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
 const lipiyear = isLeapYear(2024);
 console.log(lipiyear);


///2nd way



 function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if( year % 100 === 0 && year % 400 === 0)
        return true;
else{
    return false;
}
}

const isLeap1 = isLeapYear2(2000);
const isLeap2 = isLeapYear2(2001);
const isLeap3 = isLeapYear2(2001);
const isLeap4 = isLeapYear2(2003);
const isLeap5 = isLeapYear2(2004);
console.log(isLeap1,isLeap2,isLeap3,isLeap4,isLeap5,'leap year hope kina?');

