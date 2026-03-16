// Multiple ways to copy one element to another

let original = [1,2,3];

let copy1 = [...original];
console.log(copy1);

let copy2 = original.slice();
console.log(copy2);

let copy3 = Array.from(original);
console.log(copy3);

let copy4 = original.concat();
console.log(copy4);

//shallow copy
copy1.push(99);
console.log(original); // This will not change as its original element
console.log(copy1);   // This will change as its shallow copy

//Deep copy
original.push(99);
console.log(original)