let scores = [
    [85,95,65],
    [75,94,86],
    [48,98,68]
];

let rowSums = scores.map(row=> row.reduce((a,b) => a+b, 0));
console.log(rowSums)

let suiteResults = 
[
    ["login-pass", "register-pass", "logout-pass"],     //Auth suite
    ["search-pass", "filter-fail", "sort-pass"],        //Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   //Payment suite
];

//to only print fail messages
for (let i=0; i<suiteResults.length; i++)
{
    for(let j=0; j<suiteResults[i].length; j++)
    {
        if(suiteResults[i][j].includes("fail"))
        {
            console.log(suiteResults[i][j]);
        }
    }
}

let execTimes = [
    [120,340,86,450],
    [200,410,100,520],
    [180,390,95,490]
];

//3 x 4