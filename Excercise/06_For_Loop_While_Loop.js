// For Loop

// 1️⃣ Print "Hello" 5 times
for  (let i = 0; i<5; i++)
{
    console.log("Hello")
}

console.log("---------------------------------------------------------")

// 2️⃣  Print numbers from 1 to 10
for  (let i = 1; i<=10; i++)
{
    console.log(i)
}

console.log("---------------------------------------------------------")


// 3️⃣ Print even numbers from 1 to 20

for  (let i = 1; i<=20; i++)
{
    if (i %2 === 0)
    console.log(i)
}

console.log("---------------------------------------------------------")

// 4️⃣ Print the sum of fisrst 10 natural number

let sum = 0;
for (let i = 1; i<=10; i++)
{
    sum = (sum + i)
}
console.log("sum of fisrst 10 natural number = "+sum)

console.log("---------------------------------------------------------")

// 5️⃣ Print the multiplication table of 5

let num = 5;
for (let i = 1; i<=10; i++)
{
    mult = num * i;
    console.log("multiplication table of 5: "+ mult)
}

console.log("---------------------------------------------------------")

// While Loop

// 1️⃣ Print "Playwright" 5 times
let i=1;

while (i<=5)
{
    console.log("Playwright")
    i++
}

console.log("---------------------------------------------------------")

// 2️⃣ Print numbers from 1 to 10
let x =1;

while (x<=10)
{
    console.log(x)
    x++;
}

console.log("---------------------------------------------------------")


// 3️⃣ Print even numbers from 1 to 20

let y = 1;
while (y <=20)
{
    if(y%2 === 0)
        console.log(y)
        y++;

}

console.log("---------------------------------------------------------")

// 4️⃣ Calculate sum of first 10 natural numbers

let sum1 = 0;
let z = 1

while (z <= 10)
{
    sum1 = sum1 + z
    z++;
}
console.log("sum of first 10 natural number : ", sum1)

console.log("---------------------------------------------------------")


// 5️⃣ Print the multiplication table of 7

let num1 = 7;
let a = 1;

while (a<=20)
{
    mult1 = num1 * a;
    console.log(mult1)
    a++
}
