function processOddPositions(numbers){
    let processed = numbers.filter((el, i) => i % 2 != 0).map(x => x * 2).reverse().join(' ');

    console.log(processed);
}

processOddPositions([10, 15, 20, 25])