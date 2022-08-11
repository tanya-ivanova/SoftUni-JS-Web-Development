function seriesCalculator(input) {
    let seriesName = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let episodeLength = Number(input[3]);

    let totalTime = seasons * episodes * (episodeLength + episodeLength * 0.2) + seasons * 10;

    console.log(`Total time needed to watch the ${seriesName} series is ${totalTime} minutes.`);
}

seriesCalculator(["Lucifer",
"3",
"18",
"55"]);