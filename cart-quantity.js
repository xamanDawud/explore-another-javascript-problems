let shoppingItems = [
    { name: "Panjabi", price: "1200", quantity: 3 },
    { name: "Pant", price: "350", quantity: 5 },
    { name: "Bag", price: "950", quantity: 6 },
];

function totalCost(items) {
    let res = 0;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let item_price = parseInt(item.price);
        let item_quantity = item.quantity;
        let item_price_quantity_count = item_price * item_quantity;
        res += item_price_quantity_count;
        // console.log(res);
    }
    console.log(res);
}

console.log(totalCost(shoppingItems));