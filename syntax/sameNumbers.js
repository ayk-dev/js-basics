function checkSameNumbers(number) {
    let sumOfDigits = 0;
    
    let result = true;

    let lastDigit = number % 10;
    

    while (number) {
        current = number % 10;
        if (current != lastDigit) {
            result = false;
        }
        number = Math.floor(number / 10);
        sumOfDigits += current
    }

    console.log(result);
    console.log(sumOfDigits);
    }

    


checkSameNumbers(1234);
