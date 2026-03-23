// Pure Functions
// A pure function always returns the same output for the same input and has no side effects

//Pure function
function calculatePassRate(total, passed)
{
    return((passed/total) *100);
}

console.log(calculatePassRate(10,7));
console.log(calculatePassRate(8,6));

//Impure function
function isPassing(score)
{
    return score >= threshold;   // depends on external vatiable
}
let threshold = 70;
console.log(isPassing(threshold));

threshold = 50;
console.log(isPassing(threshold));