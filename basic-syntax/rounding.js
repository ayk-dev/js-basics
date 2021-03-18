function rounding(num1, num2) {
    
    let number = parseFloat(num1);
    let precision = parseInt(num2);
    
    if (precision > 15) {
        precision = 15;
    }

    result = number.toFixed(precision)
    console.log(parseFloat(result))

}

rounding(10.555000, 4)