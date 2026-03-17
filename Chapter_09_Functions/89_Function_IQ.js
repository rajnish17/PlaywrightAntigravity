//Return value

//Question1
function getStatus(code)
{

    if(code >=200 && code <300)
        return "success"
    if(code>=300 && code <500)
        return "client error"
    if(code>=500)
        return "server error"
}
console.log(getStatus(500));


//Question2
function logTest(name)
{
    console.log(`Running: ${name}`)
}
console.log(logTest("Login"))


//Question3
greet("Alice")    // Hoisting is possible

function greet(name)
{
    return `Hello, ${name}!`;
}
console.log(greet("Raj"))


//Question4
sayHi("bob")   // Expression not hoisted so will throw an error

const sayhi = function (name)
{
    return `Hello, ${name}!`;
}