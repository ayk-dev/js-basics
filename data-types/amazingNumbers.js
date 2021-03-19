function amazingNumbers(number) {
    
    let sumOfDigits = 0;
    
    let numberCopy = number;
    while (numberCopy > 0) {
        lastDigit = numberCopy % 10;
        numberCopy = Math.floor(numberCopy / 10);
        sumOfDigits += lastDigit;
    }

    let isAmazing = false;
    let sumOfDigitsCopy = sumOfDigits;
    while (sumOfDigitsCopy > 0) {
        digit = sumOfDigitsCopy % 10;
        sumOfDigitsCopy = Math.floor(sumOfDigitsCopy / 10);
        if (digit == 9) {
            isAmazing = true;
        }
    }

    let result = '';
    if (isAmazing) {
        result = 'True';
    } else {
        result = 'False';
    }

    console.log(`${number} Amazing? ${result}`);
}