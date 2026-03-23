// Scope in Functions

let env = "staging"; //global scope

function setupConfig()
{
    let timeout = 3000;     // local scope
    console.log(env);       // can access global
    console.log(timeout)    // can access local
}
setupConfig()
    console.log(env);       // this can be access outside as its global scope
    // console.log(timeout)    // this cant be accessed as its blocked scope


//Nested scope
function outer()
{
    let x = 10;

    function inner()
    {
        let y = 20;
        console.log(x); // Inner can access outers variables
    }

    inner();
    console.log(y); // Outer cant access inner variables
}

