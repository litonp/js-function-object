/*
function functionName (parameters){
    function body
    return
}
var returnedValue = functionName(patameters value)
*/

function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAverage(assignment1Marks, assignment1Marks, assignment3Marks);
console.log('my avrage:', myAverage);