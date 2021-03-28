function stringLength(strOne, strTwo, strThree) {
    let sumOfLengths = strOne.length + strTwo.length + strThree.length;

    let averageLength = Math.round(sumOfLengths / 3);

    console.log(sumOfLengths);
    console.log(averageLength);
}