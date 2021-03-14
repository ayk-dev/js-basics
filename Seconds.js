function addSeconds(num1, num2, num3) {
    let racerOne = Number(num1);
    let racerTwo = Number(num2);
    let racerThree = Number(num3);
    let totalSeconds = racerOne + racerTwo + racerThree;
    let minutes = Math.trunc(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10) {
        result = `${minutes}:0${seconds}`
    }else {
        result = `${minutes}:${seconds}`
    }
    console.log(result)
}

addSeconds("35", "45", "44")
addSeconds("50", "50", "49")
addSeconds("14", "12", "10")