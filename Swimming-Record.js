function isRecord(num1, num2, num3) {
    let currentRecord = Number(num1);
    let distance = Number(num2);
    let timePerMeter = Number(num3);
    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = distance * timePerMeter + delay;
    if (totalTime < currentRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        timeSlower = totalTime - currentRecord
        console.log(`No, he failed! He was ${timeSlower.toFixed(2)} seconds slower.`)
    }
}

isRecord("10464", "1500", "20");
isRecord("55555.67", "3017", "5.03");