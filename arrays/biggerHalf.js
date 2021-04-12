function biggerHalf(numbers){
    const sorted = numbers.sort((a, b) => a - b);

    const halfArray = sorted.slice(-Math.ceil(sorted.length / 2));

    return halfArray;

}