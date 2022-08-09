//Removes elements from an array
//and, if necessary, inserts new elements in their place,
//returning the deleted elements
// will change the original Array

let arr = [23, 24, 25, 26, 27, 28, 29, 30];
let spl = arr.splice(2, 5, 100, 200, 300, 400);
console.log(spl);
console.log(arr);
arr.splice();0