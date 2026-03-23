// Hoisting
// Function declarartions are hoisted
// You can call them before they are defined
// Function expressions and arrow functions are NOT


//Hoisting will work here as functions are called here before they are defined
greet("Alice")

function greet(name)
{
    return (`Hello, ${name}`)
}
console.log(greet("Alice"))

//Hoisting will not work here when you assign the value as const & let doesnt allow hoisting concept
sayHi("Bob")

const sayHi = function(name)
{
    return (`Hello, ${name}`)
}
