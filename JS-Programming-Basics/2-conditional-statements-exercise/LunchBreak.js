function isTimeEnoughForWatchingTVSeries(input) {
    let tvSeriesName = input[0];
    let episodeDiration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchBreak = breakDuration / 8;
    let restTime = breakDuration / 4;

    let freeTime = breakDuration - (lunchBreak + restTime);

    if (freeTime >= episodeDiration) {
        console.log(`You have enough time to watch ${tvSeriesName} and left with ${Math.ceil(freeTime - episodeDiration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${tvSeriesName}, you need ${Math.ceil(episodeDiration - freeTime)} more minutes.`);
    }
}

isTimeEnoughForWatchingTVSeries(["Teen Wolf",
"48",
"60"])