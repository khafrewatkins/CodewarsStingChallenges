// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    
    
    let allnums = marks.reduce((sum, current) => sum + current, 0);
    let numave = allnums/marks.length;
    return Math.floor(numave);
  }