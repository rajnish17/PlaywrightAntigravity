// Checking arrays

//to check if something is Array or not
let a = Array.isArray([1,2,3])
let b = Array.isArray("test")
console.log(a)
console.log(b)


// every element checks
let r = [80,90,85].every(s => s >70)
console.log(r)

// some element checks
let s = [40,50,60].some(s => s >60)
console.log(s)