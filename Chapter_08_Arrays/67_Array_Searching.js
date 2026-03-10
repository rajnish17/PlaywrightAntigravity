// Searching
let results = ['pass', 'fail', 'skip', 'error', 'pass'];

// indexOf - return first index, or -1 if not found
console.log(results.indexOf("pass"))
console.log(results.indexOf('skip'))


// lastIndexOf - searches from the end
console.log(results.indexOf("failed"))


// includes - returns boolean value
console.log(results.includes("error"))


//find - returns the only first matching element
let num = [10,20,35,45]
console.log(num.find( n => n>20)) // Find number which is greater than 20, it gives first element

console.log(num.findIndex( n => n>20)) // Find number index which is greater than 20, it gives first element

console.log(num.findLast( n => n >20)) // Find number which is greater than 20, it gives last element

console.log(num.findLastIndex( n => n >20)) // Find number index which is greater than 20, it gives last element