const school = {
    name: 'vnc',
    class: ['1', '2','3','4','5'],
    event: ['arts','mela','actting','dance'],
    unique: {
        color: 'blue',
        result:{
            gpa: 'A+',
            merit: 'top'
        }
    }
    
}

// school.unique.result.merit = 'top top top top'
console.log(school.unique);
//console.log(school['unique'].color);--> same if want '' diya dite chai
console.log(school.unique.color);
console.log(school.unique.result);
console.log(school.unique.result.merit);

// change event

school.event[1] = '16 decembor';
console.log(school);
// only find event
console.log(school.event[3]);

// delete korte chaile


delete school.class;
console.log(school);


