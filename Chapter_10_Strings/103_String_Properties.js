// String properties and basic Access

let str = "Hello world !"

console.log(str.length); // 13 -> includes space, symbols etc

// Access by index
console.log(str[0]);  // 0th index
console.log(str[7]); // 7th Index
console.log(str.at(-1))   // 1st index from last
console.log(str.at(-6))   // 6th index from last

// charAt
console.log(str.charAt(0)); // gives specific position

// charCodeAt
console.log(str.charCodeAt(0));  // gives unicode value
