function squareOfStars(arg) {
    let char = '* ';
    let square = '';


    if (arg) {
        for (let i = 0; i < arg; i++) {
            row = char.repeat(arg) + '\n';
            square += row;
        }
    } else {
        for (let i = 0; i < 5; i++) {
            row = char.repeat(5) + '\n';
            square += row;
        }
    }

    console.log(square);
}

squareOfStars(15)
