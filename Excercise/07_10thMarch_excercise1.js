// Exercise 1 : API Response Validation
// You receive an array of API response codes. Write code to:


// 1.Check if ALL responses are successful (200–299)
// 2.Find the FIRST non-success code
// 3.Return all unique error codes


// let responses = [200, 201, 404, 500, 404, 200, 503];

let response = [200, 201, 404, 500, 404, 200, 503];

// 1.Check if ALL responses are successful (200–299)
let SuccessResponse = response.filter(s => s>=200 && s<300)
console.log(SuccessResponse);

// 2.Find the FIRST non-success code
let nonSuccessResponse = response.find(n => n>299)
console.log(nonSuccessResponse)

// 3. Return all unique error codes
let UniqueErrorCodes = response.filter(s => s>300)
console.log(UniqueErrorCodes)
