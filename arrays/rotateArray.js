function rotateArray(array, number){
    for (let i = 0; i < number; i++){
        lastElement = array.pop();
        array.unshift(lastElement);
    }

    return array.join(' ');

}

console.log(rotateArray(['Banana','Orange','Coconut','Apple'], 15));