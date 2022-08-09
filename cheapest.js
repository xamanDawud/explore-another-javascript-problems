let phones = [{
        name: "Samsung",
        camera: "10",
        Storage: "32GB",
        color: "Yellow",
        price: 50000,
    },
    {
        name: "Oppo",
        camera: "12",
        Storage: "32GB",
        color: "Yellow",
        price: 5000,
    },
    {
        name: "Xiaomi",
        camera: "15",
        Storage: "32GB",
        color: "Yellow",
        price: 40000,
    },
    {
        name: "Redmi",
        camera: "10",
        Storage: "32GB",
        color: "Yellow",
        price: 50000,
    },
    {
        name: "Iphone",
        camera: "15",
        Storage: "132GB",
        color: "Yellow",
        price: 82000,
    },
];

function findCheapestPrice(phones) {
    let res = phones[0];
    for (let i = 0; i < phones.length; i++) {
        let phone = phones[i];
        if (res.price > phone.price) {
            res = phone;
        }
    }
    console.log(res);
}

findCheapestPrice(phones);