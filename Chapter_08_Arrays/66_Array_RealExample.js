let browser = ['chrome', 'safari', 'opera', 'firefox']

console.log(browser)
console.log(browser.length)

console.log("**************************************************")

browser.pop();
console.log(browser)

console.log("**************************************************") 

browser.shift();
console.log(browser)


let browser1 = ['chrome', 'safari', 'opera', 'firefox']

for(let i=0; i<browser1.length; i++)
{
    console.log(browser1[i])
    if(browser[i]=== "opera")
    {
        console.log("opera is removed")
    }
}