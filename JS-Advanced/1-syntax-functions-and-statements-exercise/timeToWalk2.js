function solve(steps, footprintLength, speed) {
    let distance = steps * footprintLength;
    let metersPerSecond = speed * 1000 / 3600;
    let rest = Math.floor(distance / 500) * 60;
    let time = distance / metersPerSecond;
    time += rest;
    
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - (hours * 3600)) / 60);
    let seconds = Math.round(time - minutes * 60);


    hours = hours.toFixed(0);
    minutes = minutes.toFixed(0);
    seconds = seconds.toFixed(0);

    console.log(`${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);
//solve(10000, 0.60, 5);