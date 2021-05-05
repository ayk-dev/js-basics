function printElements(array, incr) {
    const result = []
    for (let i = 0; i < array.length; i += incr) {
        result.push(array[i]);
    }

    return result;
}