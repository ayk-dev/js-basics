function pieceOfPie(pies, pieOne, pieTwo){
    let startIndex = pies.indexOf(pieOne);
    let endIndex = pies.indexOf(pieTwo);

    const result = pies.slice(startIndex, endIndex + 1);

    return result;
}