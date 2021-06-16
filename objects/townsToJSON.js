function townsJSON(input) {
    let tableHeadings = input.shift().split(' | ');
    
    let [h1, h2, h3] = tableHeadings.map(x => x.replace('| ', '').replace(' |', ''));

    let towns = [];
    while (input.length) {
        let row = input.shift().split(' | ');
        row = row.map(x => x.replace(' |', '').replace('| ', ''));
        
        const name = row[0];
        const latitude = Number(row[1]);
        const longitude = Number(row[2]);

        const town = {};
        town[h1] = name;
        town[h2] = Number(latitude.toFixed(2));
        town[h3] = Number(longitude.toFixed(2));

        towns.push(town);
    }
    
    return JSON.stringify(towns);
}

console.log(townsJSON(
    ['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
))