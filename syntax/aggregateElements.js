function aggregateElements(arr) {
    let sumOfElements = 0;
    let sumOfInversed = 0;
    let strRepr = '';

    for (num of arr) {
        sumOfElements += num;
        sumOfInversed += 1 / num;
        strRepr += `${num}`;
    }

    console.log(sumOfElements);
    console.log(sumOfInversed);
    console.log(strRepr);
}