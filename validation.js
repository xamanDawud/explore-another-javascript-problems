function add(num1, num2) {
    if (typeof num1 !== "string" && typeof num2 !== "string") {
        console.log("Please enter a String");
    } else {
        return num1 + num2;
    }
}

console.log(add(23, 23));