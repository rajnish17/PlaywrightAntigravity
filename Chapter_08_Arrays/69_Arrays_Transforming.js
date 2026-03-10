
let scores = [45,50,65,95,84,35];

// map - transforms every element, return new array
let grades = scores.map( s => s>70 ? "Pass" : "Fail")
console.log(grades)

// Filter - keeps element that pass a test
let passing = scores.filter( s => s>70)
console.log(passing)

//reduce - accumulte to a single value
let total = scores.reduce((sum, s) => sum+s, 0)
console.log(total)

//flat - flattens nested arrays
let nested = [[1,2], [3,4], [5]]
console.log(nested.flat());