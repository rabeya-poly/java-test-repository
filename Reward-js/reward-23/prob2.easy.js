function checkName(name){
    if(typeof name !== 'string'){
        return 'invalid';
    }
    let lastLetter = name.slice(-1).toLowerCase();
    
    let checkArray = ['a','y', 'i','e','o','u','w'];
    for(let char of checkArray){
    }
    let result = checkArray.includes(lastLetter)
    return result? 'Good Name' : 'Bad Name';
}