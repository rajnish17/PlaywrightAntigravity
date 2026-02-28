// As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") 
// and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else 
// that prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

let frequency = "often";   // "always", "often", "rarely"
let impact = "blocker";    // "blocker", "major", "minor"

let priority = "";

// Nested if-else classification
if (frequency === "always") {

    if (impact === "blocker") {
        priority = "P0";
    } else if (impact === "major") {
        priority = "P1";
    } else if (impact === "minor") {
        priority = "P2";
    }

} else if (frequency === "often") {

    if (impact === "blocker") {
        priority = "P1";
    } else if (impact === "major") {
        priority = "P2";
    } else if (impact === "minor") {
        priority = "P3";
    }

} else if (frequency === "rarely") {

    if (impact === "blocker") {
        priority = "P2";
    } else if (impact === "major") {
        priority = "P3";
    } else if (impact === "minor") {
        priority = "P4";
    }

} else {
    priority = "Invalid Input";
}

// Print result
console.log("===== BUG CLASSIFICATION REPORT =====");
console.log("Frequency:", frequency);
console.log("Impact:", impact);
console.log("Assigned Priority:", priority);
