function lastKNumbersSeq(n, k) {
    const array = [1,];

    while (array.length < n) {
        elements = array.slice(-k);
        sumOfElements = elements.reduce(addNumbers, 0);
        array.push(sumOfElements);
    }

    function addNumbers(a, b){
        return a + b;
    }

    return array;
}

console.log(lastKNumbersSeq(8, 2));