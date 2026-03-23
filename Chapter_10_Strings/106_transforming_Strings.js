//Transforming Strings

//uppercase
let str = " Hello world ! "
console.log(str.toUpperCase()); // converts to uppercase
console.log(str.toLowerCase()); // coverts to lowercase

//trim whitespaces
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

//Replace
let msg = "Test: Fail. Retry: Fail";
console.log(msg.replace("Fail", "Pass"))    // Wiil replace first only
console.log(msg.replaceAll("Fail", "Pass"))     // Wiil replace all 'Fail' with 'Pass'
console.log(msg.replace(/Fail/g, "Pass"));      // replace witrh Regex

// Concatination

console.log("Hello" + " " + "World");       //1st way
console.log("Hello".concat(" ", "World"));  //2nd way
console.log(`${"Hello"} ${"World"}`)        //3rd way

let url = "https://app.vwo.com?q=app=pramod";
console.log(url.replace(/app/g, "qa"));

// Splitting & joining
console.log("pass,fail,skip".split(","));
console.log("hello".split(""));

console.log("test_login_pass".split("_").join(" "));

// template literal (joining with format)

let parts = ["2024", "03", "07"]
let date = parts.join("-");
console.log(date)