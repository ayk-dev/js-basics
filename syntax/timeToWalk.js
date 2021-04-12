function timetoWalk(steps, footprintLen, speed) {
    let distance = (steps * footprintLen) / 1000

    let delay = parseInt(distance / 0.5);
    
    let timeInSeconds = ((distance / speed) * 60 + delay) * 60;


    function toHHMMSS(time) {
        let sec_num = time; 
        let hours   = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = Math.round(sec_num - (hours * 3600) - (minutes * 60));
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours + ':' + minutes + ':' + seconds;
    }

    console.log(toHHMMSS(timeInSeconds))
}

timetoWalk(4000, 0.60, 5)
timetoWalk(2564, 0.70, 5.5)