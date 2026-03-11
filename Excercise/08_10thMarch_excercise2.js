// Spot the Bug

// What is wrong with this code? Fix it.

let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);

// --> Its comparing number and returning 1200 as fastest as By default, 
// sort() converts numbers to strings and sorts them lexicographically (alphabetically)
//  instead of numerically.

let responseTime = [320, 85, 1200, 450, 99];
let fastest = Math.min(...responseTime);
console.log("Fastest:", fastest)
