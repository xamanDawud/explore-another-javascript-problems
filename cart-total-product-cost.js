let shoppingItems = [
    { name: "Panjabi", price: "1200" },
    { name: "Pant", price: "350" },
    { name: "Bag", price: "950" },
];

function totalCost(items) {
    let res = 0;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        res += parseInt(item.price);
        // console.log(res);
    }
    console.log(res);
}

console.log(totalCost(shoppingItems));