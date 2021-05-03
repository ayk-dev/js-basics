function magicMatrix(matrix){

    let sumOfRows = matrix.map((col => col.reduce((a, b) => a +  b)));

    let sumOfCols = matrix.reduce((z, a) => z.map((b, y) => a[y] + b));
        
    return sumOfRows.concat(sumOfCols).every((el, i, arr) => el == arr[0]);

    /*
    function Matrices(arr) {
 
    let sumRow = arr.map((col => col.reduce((a,b) => a + b)));
 
    let sumCol = arr.reduce((z, a) => z.map((b, y) => a[y] + b));
 
    let equal = array => array.every( x => x === array[0]);
 
    return equal(sumRow) && equal(sumRow) && sumRow.toString() === sumCol.toString();
 
}
*/
}

console.log(magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]))