

let amul = null;
let val = amul ?? "nandini milk";
let val2 = null ?? "default"; // "default" (?? returns right side if left is null/undefined)


val = "which milk? -> " + val;
console.log(val);