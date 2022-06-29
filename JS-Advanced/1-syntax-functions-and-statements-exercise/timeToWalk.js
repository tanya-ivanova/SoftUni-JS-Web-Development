function timeToWalk (steps, footprintLength, speed) {
    let distance = Number(steps) * Number(footprintLength);
    let time = distance * 60 / (Number(speed) * 1000) + Math.floor(distance / 500);
    
    time = Number(time.toFixed(2)); 
    //console.log(time);       
    
    let regexPatternSeconds = /\.(\d*)/;
    let matchSeconds = regexPatternSeconds.exec(time);

    let seconds = 0;

    if (matchSeconds !== null) {
        seconds = matchSeconds[1];
    }
    //console.log(seconds);

    if (seconds > 0) {
        if (seconds < 10) {
            seconds = seconds * 60 / 10;
        } else {
            seconds = Math.round(seconds * 60 / 100);
        }
    }

    //console.log(seconds);

    let regexForMinutes = /(\d+)\./;
    let matchMinutes = regexForMinutes.exec(time);
    let minutes = 0;

    if (matchMinutes !== null) {
        minutes = matchMinutes[1];
    } else {
        minutes = time;
    }    

    let hours = 0;

    while (minutes >= 60) {
        hours++;
        minutes -= 60;
    }

    hours = '' + hours;
    minutes = '' + minutes;
    seconds = '' + seconds;

    console.log(`${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
timeToWalk(10000, 0.60, 5);