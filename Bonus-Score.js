function bonusScore(num) {
    let initialScore = Number(num);
    let bonus = 0.0;
    if (initialScore <= 100) {
        bonus = 5;
    }else if (initialScore > 100 && initialScore <= 1000) {
        bonus = 0.20 * initialScore;
    }else {
        bonus = 0.1 * initialScore;
    }
    if (initialScore % 2 == 0) {
        bonus += 1;
    }
    if (initialScore % 10 == 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(bonus + initialScore);
}