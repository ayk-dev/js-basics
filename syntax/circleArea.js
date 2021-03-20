function circleArea(arg) {
    let result;

    let argType = typeof(arg);

    if (argType === 'number') {
        result = (Math.pow(arg, 2) * Math.PI).toFixed(2);
    } else {
        result = `We can not calculate the circle area, because we receive a ${argType}.`
    }

    return result
}