//Sorting by alphabetical order by default

let fruits = ['apple', 'banana', 'strawberry', 'kiwi', 'cheery']
console.log(fruits.sort());

let nums = [1,65,85,10,20,3]
console.log(nums.sort());

//To print numbers in sorting
console.log(nums.sort((a, b) => a - b)); // Ascending

console.log(nums.sort((a, b) => b - a)); // Descending
