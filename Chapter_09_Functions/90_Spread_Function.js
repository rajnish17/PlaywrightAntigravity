function add(a,b,c)
{
    return a+b+c;
}

let num = [1,2,3];
console.log(add(...num));


function hasError(...codes)
{
    return codes.some(c => c>=400) //some return boolean value
}
let responseCode = [200,201,404];

console.log(hasError(...responseCode));

