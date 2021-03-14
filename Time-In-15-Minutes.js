function timeIn15Minutes(num1, num2) {
    let hour = Number(num1);
    let minutes = Number(num2);
    let timeInMinutes = hour * 60 + minutes;
    let after15Minutes = timeInMinutes + 15;
    let newHour = Math.trunc(after15Minutes / 60);
    if (newHour == 24) {
        newHour = 0;
    }
    let newMinutes = after15Minutes % 60;
    if (newMinutes < 10) {
        result = `${newHour}:0${newMinutes}`;
    }else {
        result = `${newHour}:${newMinutes}`;
    }
    console.log(result)
}

timeIn15Minutes("1", "46");
timeIn15Minutes("12", "49");
timeIn15Minutes("23", "59");
timeIn15Minutes("0", "01")