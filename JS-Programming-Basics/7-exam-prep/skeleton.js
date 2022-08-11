function skeleton(input) {
    let controlMinutes = Number(input[0]);
    let controlSeconds = Number(input[1]);
    let lengthInMeters = Number(input[2]);
    let secondsPer100meters = Number(input[3]);

    let control = controlMinutes * 60 + controlSeconds;
    let timeToDecrease = lengthInMeters / 120 * 2.5;
    let marinTime = (lengthInMeters / 100) * secondsPer100meters - timeToDecrease;

    if(marinTime > control) {
        console.log(`No, Marin failed! He was ${(marinTime - control).toFixed(3)} second slower.`);
    } else {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    }
}

skeleton(["1",
"20",
"1546",
"12"]);