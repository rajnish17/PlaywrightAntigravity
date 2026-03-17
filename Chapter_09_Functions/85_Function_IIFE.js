// Immediately invoked function expression

//Example1 - Normal function
function name1() {
    console.log("Hi")
}
name1();

//Example2 - Immediately invoked function expression (Removes 'name1', add bracket (..) & call yourself())
(function () {
    console.log("Hi")
})();


(function()
{
    console.log("Staging")
})();

//With Arrow Function
(()=>
{
    console.log("Staging1")
})();