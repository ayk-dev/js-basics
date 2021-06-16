function registry(input){
    const townRegistry = {};

    for (entry of input){
        let args = entry.split(' <-> ');

        let name = args[0];
        let population = Number(args[1]);

        if (townRegistry[name] !== undefined){
            population += townRegistry[name];
        }

        townRegistry[name] = population;

    }

    for (let city in townRegistry){
        console.log(`${city} : ${townRegistry[city]}`);
    }
}

registry(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000'])