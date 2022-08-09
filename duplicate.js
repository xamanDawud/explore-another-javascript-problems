let name = ["xaman", "saidul", "istiak", "labu bhai", "xaman", "labu bhai"];
let res = [];

for (let i = 0; i < name.length; i++) {
    let elements = name[i];
    if (res.includes(elements) == false) {
        res.push(elements);
    }
}
console.log(res);