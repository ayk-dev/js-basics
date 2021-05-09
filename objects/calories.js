function calorieObject(inputData) {
    const calorieObj = {};

    // for (let i = 0; i < inputData.length; i += 2){
    //     calorieObj[inputData[i]] = Number(inputData[i + 1]);
    // }

    inputData.forEach((el, i) => {
        if (i % 2 == 0){
            calorieObj[el] = undefined;
        } else {
            calorieObj[inputData[i - 1]] = Number(el);
        }
    })

    return calorieObj;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))

