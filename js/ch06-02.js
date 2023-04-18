let products = [
    {name: '바나나', price : 1200},
    {name: '체리', price : 300},
    {name: '아보카도', price : 400},
    {name: '귤', price : 70},
    {name: '딸기', price : 100},
];

// console.log(products);
for(let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(element);
}
for(const key in products) {
    const element = products[key];
    console.log(key + "\t" + products[key].name + "\t" + products[key]);
}
for(const item of products) {
    console.log(item.name + "\t" + item.price);
}