function cityRecord(n, p, t){
    const city = {
        name: n,
        population: p,
        treasury: t
    }

    return city;
}

console.log(cityRecord('Tortuga', 7000, 15000))