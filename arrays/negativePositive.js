function negativePositiveNumbers(numbers){
    let result = [];

    for (num of numbers) {
        if (num >= 0){
            result.push(num);
        } else {
            result.unshift(num);
        }
    }

    for (n of result){
        console.log(n);
    }
}