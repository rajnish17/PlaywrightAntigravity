let arr = [1,2,3]

// Add to end

arr.push(4);
console.log(arr)

//Remove from End
arr.pop();
console.log(arr)

// Add multiple elements

arr.push(5,6)
console.log(arr)


// Add at start of the array
arr.unshift(0);
console.log(arr)

//Remove from beginning
arr.shift();
console.log(arr)

//remove specific index
arr.splice(2,1)
console.log(arr)

arr.splice(2, 0, 99) // 2 -> Index number, 0 -> Delete count, 99 -> Added at that index
console.log(arr)

arr.splice (1,2,10,20)  // 1-> Index number, 2-> Delete count, 10,20 -> Added at that index
console.log(arr)