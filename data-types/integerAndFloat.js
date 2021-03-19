function integerFloat(num1, num2, num3) {
    
    let sumOfNumbers = num1 + num2 + num3;

    let result = '';
    if (sumOfNumbers % 1 !== 0) {
        result = 'Float';
    } else {
        result = 'Integer';
    }

    console.log(`${sumOfNumbers} - ${result}`);
}

integerFloat(100, 200, 303);
