// Strings

let url = "https://app.vwo.com"
let status = 'pass';
let message = `Test completed in ${320}ms`

//single quotes
let a = 'hello';

// Double quotes
let b = "world";

// Template literals (backticks)
let name1 = "Rajnish"
let message1 = `Hello, ${name1} ! 2+2 = ${2+2}`

console.log (message1)

//Multiline
let report = `
Test:Login
Status:Pass
Duration: 320ms
`;


// String() constructor (coverts other types)
console.log(String(200)); // number becomes string
console.log(String(true)); // boolean becomes string
console.log(String(null)); // null becomes string
console.log(String([1,2])); // array becomes string


