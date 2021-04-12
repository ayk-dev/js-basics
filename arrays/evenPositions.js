function evenPositions(array) {
    const resultArr = [];

    for (i in array) {
        if (i % 2 == 0) {
            resultArr.push(array[i]);
        }
    }

    console.log(resultArr.join(' '));
}