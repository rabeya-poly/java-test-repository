
const person1={
    name: "abul kasem",
    honors: 40,
    hsc: 30,
    isFFfamily: true
}

const person2={
    name: "korim mia",
    honors: 42,
    hsc: 35,
    isFFfamily: false
}
const person3={
    name: "khali khan",
    honors: 32,
    hsc: 31,
    isFFfamily: true
}


function getJob(info){
    if(typeof info !== "object"){
        return "invalid";
    }
    let totalMarks = info.honors + info.hsc;
    //console.log(totalMarks);
    if(info.isFFfamily){
        totalMarks = totalMarks + (totalMarks * 0.2);
        }
        console.log(totalMarks);
if(info.isFFfamily && totalMarks >= 80){
    return "YOU Got JOB"
}
else if( info.isFFfamily && totalMarks <80){
    return "sorry.next time...."
}
else if(!info.isFFfamily && totalMarks >= 80){
    return " job";

}
else if (!info.isFFfamily && totalMarks <80){
    return "work harder....."
}




    //console.log(totalMarks);
//  if(totalMarks >= 80){
//     return "you got the job"
//  }
//  else{
//     return "you failed,next time......."
//  }
}
const jobFinal = getJob(person1);
 console.log(jobFinal);
 const jobFinal2 = getJob(person2);
 console.log(jobFinal2);
 const jobFinal3 = getJob(person3);
 console.log(jobFinal3);