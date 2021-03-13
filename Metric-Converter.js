function metricConverter(num, text1, text2) {
    let numToConvert = Number(num);
    let inputUnit = text1;
    let outputUnit = text2;
    let result = 0.0;
    if (inputUnit == 'm') {
        if (outputUnit == 'cm') {
            result = numToConvert * 100;
        } else if (outputUnit == 'mm') {
            result = numToConvert * 1000;
        }
    }else if (inputUnit == 'cm') {
        if (outputUnit == 'm') {
            result = numToConvert / 100;
        }else if (outputUnit == 'mm') {
            result = numToConvert * 10;
        }
    }else if (inputUnit == 'mm') {
        if (outputUnit == 'm') {
            result = numToConvert / 1000;
        }else if (outputUnit == 'cm') {
            result = numToConvert / 10;
        } 
    }
    console.log(result.toFixed(3))
}