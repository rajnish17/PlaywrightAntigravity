//if (ourStatusCode >=200 & ourStatusCode< 300)

//Type1 - using normal function
function validateStatusCode (status)
{
    if (status >=200 & status <300)
    {
        console.log("Request if fine!")
    }
}
validateStatusCode(200)

//Type2 - using expression
const validateStatusCode_Exp =  function (status)
{
    if (status >=200 & status <300)
    {
        console.log("Request if fine!")
    }
}
validateStatusCode_Exp(200)

//Type3 - using Arrow function
const validateStatusCode_Arr = (status) =>
{
    if (status >=200 & status <300)
    {
        console.log("Request if fine!")
    }
    else
    {
        console.log("Invalid request")
    }
}
validateStatusCode_Arr(500)