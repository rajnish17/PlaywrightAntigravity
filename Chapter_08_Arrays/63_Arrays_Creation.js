let fruits = [];

let fruits_fresh = ["apple", "banana", "orange"];
console.log(fruits_fresh);
console.log(fruits_fresh.length)

let arr = [10, 20, 30, 40, 50, 60]
console.log(arr[1])
console.log(arr[6]) // undefined
console.log(arr.length)

let testResults = ["pass", "fail", "skip"]
let mixed = ["one", 2, 98.35, false] // JS arrays can hold any type

console.log(testResults)
console.log(mixed)

let browsers = ["chrome", "safari", "opera"]
console.log(browsers)

let scores = new Array(3);
console.log(scores)

let scores2 = new Array(1, 2, 3)
console.log(scores2)

let numbers = new Array(100, 200, 300, 400) // new memory
console.log(numbers)
console.log(numbers.length)

let test = Array.of(10, 20, 30, 40, 50, 60, 70) // same memory
console.log(test)
console.log(test[5])

let chars = Array.from("hello"); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(chars)