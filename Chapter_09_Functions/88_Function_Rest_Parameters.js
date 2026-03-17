
//Rest parameters adds ... parameters in the last
function logResults(suiteName, ...results)
{
    console.log(`Suite: ${suiteName}`);
    console.log(`Results: ${results.join(", ")}`)
}
logResults("Suite1", "Pass", "Fail", "Skip", "Pass")

function add(a, b, c)
{
    return a+b+c
}
console.log(add(5,6,8))