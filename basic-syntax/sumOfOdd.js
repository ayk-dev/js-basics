function sumOfOddNumbers(n) {
    let counter = 0;
    let i = 1;
    let sumOfOdd = 0;

    while (counter < n){
        if (i % 2 !== 0) {
            console.log(i);
            sumOfOdd += i
            counter++;
        }
        i++;
    }

    console.log(`Sum: ${sumOfOdd}`)
}

sumOfOddNumbers(10)

