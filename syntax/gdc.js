function gdcOfTwoPositiveNumbers(a, b) {
    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gdcOfTwoPositiveNumbers(15, 5))