function largestNumber(x, y, z) {
    let result;

    if (x > y && x > z) {
        result = x;
    } else if (y > x && y > z) {
        result = y;
    } else {
        result = z;
    }

    return `The largest number is ${result}.`
}