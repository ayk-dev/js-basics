function carFactory(input){
    const {
        model,
        power,
        color,
        carriage,
        wheelsize 
    } = input;

    function getEngine(power){

        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ]

        return engines.find(engine => engine.power >= power);
    }

    function getCarriage(carriege, color){
        return {
            type: carriege,
            color
        }
    }

    function getWheels(wheelsize){
        let wheel = Math.floor(wheelsize) % 2 == 0 ? Math.floor(wheelsize) - 1 : Math.floor(wheelsize);
        return [wheel, wheel, wheel, wheel]; 
        // Array(4).fill(wheel, 0, 4);
    }

    return {
        model: model,
        engine: getEngine(power),
        carriage: getCarriage(carriage, color),
        wheels: getWheels(wheelsize)
    }

}

console.log(carFactory(
    { model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }
))