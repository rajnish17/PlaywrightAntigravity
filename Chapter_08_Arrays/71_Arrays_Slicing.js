//Slicing & Combining
let arr = [1, 2, 3, 4, 5]; // slice(start,end) - returns new array, does not mutate actual
console.log(arr.slice(1, 3));

console.log(arr.slice(-5));


//Concatination
let arr1 = [1, 2, 3, 4, 5]

let a = [1, 2]
let b = [3, 4]
let c = a.concat(b)
console.log(c)

let d = a.concat(b).concat(c, [5, 6])
console.log(d)

//spread concatination
let e = [...a, ...b]
console.log(e);

//Join
let s = ["pass", "fail", "skip"].join(" ") // It joins each element under string
console.log(s)