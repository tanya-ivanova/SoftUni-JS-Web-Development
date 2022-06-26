function isItWorldRecord(input) {
    let worlRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePerOneMeter = Number(input[2]);

    let ivanRecord = distance * timePerOneMeter;
    let count = Math.floor(distance / 15);
    ivanRecord = ivanRecord + (count * 12.5);

    if (ivanRecord < worlRecord) {
        console.log(`Yes, he succeeded! The new world record is ${ivanRecord.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(ivanRecord - worlRecord).toFixed(2)} seconds slower.`);
    }
}

isItWorldRecord(["10464",
"1500",
"20"])