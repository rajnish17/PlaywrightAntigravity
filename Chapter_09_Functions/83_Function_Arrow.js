const greet = function(name)
{
    return `Hello, ${name}`
}
console.log(greet("Raj"))

// Arrow function works only when has single function
// (It doesnt requires keywords function, return & {} and just adds =>)
const greet1 = (name) => `Hello, ${name}`
console.log(greet1("Deepak"))

const doubleIt = n => n*2;
console.log(doubleIt(50))

//For multi lines, arrow function needs braces + return
const getResult = (score) =>
{
    if(score >=70) return "pass";
    return "fail";
}
console.log(getResult(71))