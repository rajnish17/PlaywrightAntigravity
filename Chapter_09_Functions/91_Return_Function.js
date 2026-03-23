
//Return values
function getStatus (code)
{
    if (code >= 200 && code < 300)
        return "Success"
    if (code >= 400 && code < 500)
        return "Client error"
    if (code> 500)
        return("Server error")
}
console.log(getStatus(505))

// Returns nothing
function logTest(name)
{
    console.log(`Running: ${name}`)
}
logTest("Hi this is a log")

// Returns multiple values via array or object
function aaa()
{
    return [2,2,5,6,8,9];
}
console.log(aaa())