
let url = "https://staging.vwo.com.api/login?retry=true";

//includes
console.log(url.includes("staging"));
console.log(url.includes("production"));

// StartsWith / endsWith
console.log(url.startsWith("https"));
console.log(url.endsWith("true"));

//indexOf /lastindexOf
console.log(url.indexOf("a"))       // index of letter in first occurance
console.log(url.lastIndexOf("a"))  // index of letter in last occurance
console.log(url.indexOf("no"));   // returns -1 if not found

// search
console.log(url.search(/login/))

//regex
console.log(url.search(/\d/));