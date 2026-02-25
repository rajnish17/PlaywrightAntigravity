let score = 79;

switch (true) {

    case (score >= 90 && score < 100):
        console.log("Grade A");
        break;

    case (score >= 80):
        console.log("Grade B");
        break;

    case (score >= 70):
        console.log("Grade C");
        break;

    case (score >= 60):
        console.log("Grade D");
        break;

    default:
        console.log("Fail");

}