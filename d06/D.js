var student_scores = [ 90, 86, 78, 94, 100];
// This is what reduce() is doing!
// calling my function with (accum, current) 
// for each item in my array
// accum:    0   90  176  254  348 448<- returned value
// current:  90  86   78   94  100
function averageScore(scores){
    var sum = scores.reduce(function(accum,current){
        return accum + current;
    },0);
    return Math.floor(sum/scores.length);
}

console.log(averageScore(student_scores)); // print the avg score

