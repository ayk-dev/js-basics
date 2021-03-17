function triangleOfNumbers(n) {
    for (i = 1; i <= n; i++) {
        result = i + ' ';
        console.log(result.repeat(i));
    }
}

triangleOfNumbers(5)