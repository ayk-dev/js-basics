function sortedCatalogue(input) {
    let sortedInput = input.sort((a, b) => a.localeCompare(b));
    let catalogue = {};

    while (sortedInput.length) {
        let entry = sortedInput.shift();
        let letter = entry[0];

        let [product, price] = entry.split(' : ');

        if (catalogue[letter] == undefined){
            catalogue[letter] = [];
        }
        catalogue[letter].push({ product, price: Number(price) });

    }

    let result = [];
    for (const letter in catalogue) {
        let values = catalogue[letter].map(entry => `  ${entry.product}: ${entry.price}`);
        result.push(`${letter}\n${values.join('\n')}`);
    }

    return result.join('\n');
}

console.log(sortedCatalogue(
    ['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
))