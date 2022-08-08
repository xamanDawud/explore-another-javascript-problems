// check the type of array this is really array?

let arr = [13, 45, 345];
console.log(Array.isArray(arr));

// check the arr.included alternative way
if (arr.indexOf(2340) !== -1) {
    console.log(true);
} else {
    console.log(false);
}

//  Multiple array add in the one array
let arr2 = [55, 67, 77];
let add = arr2.concat(arr);
console.log(add);