let grid = [

    [10,20,30],
    [40,50,60],
    [70,80,90]
];

//how to access element from grid
console.log(grid[0][0])
console.log(grid[2][1])
console.log(grid[1][2])

//to modify value
grid[0][0] = 99;
console.log(grid[0][0])
console.log(grid)

console.log(grid.length) // number of rows
console.log(grid[0].length) // number of columns in row 0

console.log(grid[grid.length-1][grid[0].length-1])  //grid[2][2] = 90

console.log("--------------------------------------------------")


let testMatrix = [
    ["login","pass", 200],
    ["checkout", "fail", 400],
    ["search", "pass", 180]
];

for(let i=0; i<testMatrix.length; i++)
{
    for(let j=0; j<testMatrix[i].length; j++)
    {
        console.log(testMatrix[i][j])
    }
    console.log();
}

console.log("--------------------------------------------------")

//using for loop
for (let row of testMatrix)
{
    for (let cell of row)
    {
        process.stdout.write(cell+ " ")
    }
    console.log()
}

console.log("--------------------------------------------------")

//using forEach loop
testMatrix.forEach(row =>
{
    row.forEach(cell=> process.stdout.write(cell + " "))
    console.log();
});
