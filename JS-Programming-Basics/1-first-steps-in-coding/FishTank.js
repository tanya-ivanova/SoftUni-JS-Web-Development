function calculateNeededWater(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let totalVolume = (length * width * height) / 1000;
    let volumeOthers = totalVolume * percent / 100;
    let volumeNeededWater = totalVolume - volumeOthers;

    console.log(volumeNeededWater);
}

calculateNeededWater(["105 ",
"77 ",
"89 ",
"18.5 "])