

let LengthA = 5;
let LengthB = 10;
let LengthC = 8;


if (LengthA === LengthB && LengthB === LengthC && LengthA === LengthC) {
    console.log("This is an equilateral triangle")
}
else if (LengthA === LengthB || LengthB === LengthC || LengthC === LengthA) {
    console.log(" This is an isosceles triangle")
}
else if (LengthA != LengthB && LengthB != LengthC && LengthC != LengthA) {
    console.log("This is an scalene triangle")
}