function division(n) {
    
    let divisors = [2, 3, 6, 7, 10];
    let divisor = 1;

    if (n % 2 == 0) {
        divisor = 2;
    }

    if (n % 3 == 0) {
        divisor = 3;
    }

    if (n % 6 == 0) {
        divisor = 6;
    }

    if (n % 7 == 0) {
        divisor = 7;
    }

    if (n % 10 == 0) {
        divisor = 10;
    }

    if (divisor == 1) {
        console.log('Not divisible')
    } else {
        console.log(`The number is divisible by ${divisor}`)
    }
    
}

division(14)