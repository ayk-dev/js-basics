function lowestPriceCity(input) {
    let data = [];
    while (input.length) {
        let sale = input.shift();
        let [town, product, price] = sale.split(' | ');

        if (!data[product]){
            data[product] = {town, price: Number(price)}
        } else {
            data[product] = data[product].price <= Number(price) ? data[product] : {town, price: Number(price)};
        }
    }

    let result = [];
    for (const product in data){
        result.push(`${product} -> ${data[product].price} (${data[product].town})`);
    }

    return result.join('\n');
}

console.log(lowestPriceCity(
    ['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
))