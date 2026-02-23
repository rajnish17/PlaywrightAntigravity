let username = "Raj";
let password = "123";
let isAccountLocked = true;

if ((username === "Raj" && password === "123") && !isAccountLocked) {
    console.log("Allowed to enter");
}
else {
    console.log("Not allowed to enter");
}