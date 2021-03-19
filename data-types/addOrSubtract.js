function addOrSubtract(numbers){
    let sumOfOriginal = 0;
    for (num of numbers) {
        sumOfOriginal += num;
    }

    for (let index in numbers){
        let n = numbers[index];
        if (n % 2 == 0) {
           numbers[index] += Number(index);
        } else {
            numbers[index] -= index;
        }
    }

    let sumOfModified = 0;
    for (num of numbers) {
        sumOfModified += num;
    }
    console.log(numbers);
    console.log(sumOfOriginal);
    console.log(sumOfModified);
}

addOrSubtract([5, 15, 23, 56, 35]);