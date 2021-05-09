function sortingNumbers(numbers){
    const sorted = numbers.sort((a, b) => a - b);
    const result = [];

    while (sorted.length){
        smallest = sorted.shift();
        biggest = sorted.pop();
        result.push(smallest);
        result.push(biggest);
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])