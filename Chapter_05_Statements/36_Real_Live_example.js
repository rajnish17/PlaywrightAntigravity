
let isLoggedIn = true;
let userRole = "editor";


if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welocme admin -- full access");
    }
    else if (userRole === "editor") {
        console.log("Welcome editor --- can edit the data");
    }
    else if (userRole === "viewer") {
        console.log("Welocme viewer --- View only access granted")
    }
    else {
        console.log("User role not identified");
    }
}
else {
    console.log("user not logged in");
}
