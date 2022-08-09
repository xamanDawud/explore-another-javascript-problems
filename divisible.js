/*
    1. Show output From 1-50
    2. if the number is divisible by 3 than instead the number show 'foo'
    2. if the number is divisible by 5 than instead the number show 'bar'
    2. if the number is divisible by 3 and 5 than instead the number show 'foobar'
*/

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Foobar");
    } else if (i % 3 == 0) {
        console.log("Foo");
    } else if (i % 5 == 0) {
        console.log("bar");
    } else {
        console.log(i);
    }
}