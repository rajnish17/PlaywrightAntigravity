function outer()
{
    let message = "Hello";
    console.log("Outer called")

    function inner()
    {
        console.log(message);
    }
    return inner;
}
//Clouser is when a function remebers variables from its outer scope even after the outer 
//function has finished executing

let fn_inner = outer();

fn_inner();