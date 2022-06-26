function trekkingMania(input) {
    let index = 0;
    let numberOfGroups = Number(input[index]);
    index++;
    let musalaCount = 0;
    let montblancCount = 0;
    let kilimandjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;
    let totalPeople = 0;

    for (i = index; i <= numberOfGroups; i++) {
        let peopleInGroup = Number(input[index]);
        index++;
        totalPeople = totalPeople + peopleInGroup;

        if (peopleInGroup <= 5) {
            musalaCount = musalaCount + peopleInGroup;
        } else if (peopleInGroup >= 6 && peopleInGroup <= 12) {
            montblancCount = montblancCount + peopleInGroup;
        } else if (peopleInGroup >= 13 && peopleInGroup <= 25) {
            kilimandjaroCount = kilimandjaroCount + peopleInGroup;
        } else if (peopleInGroup >= 26 && peopleInGroup <= 40) {
            k2Count = k2Count + peopleInGroup;
        } else {
            everestCount = everestCount + peopleInGroup;
        }
    }
    let musalaPercent = musalaCount / totalPeople * 100;
    let montbalncPercent = montblancCount / totalPeople * 100;
    let kilimandjaroPercent = kilimandjaroCount / totalPeople * 100;
    let k2Percent = k2Count / totalPeople * 100;
    let everestPercent = everestCount / totalPeople * 100;

    console.log(musalaPercent.toFixed(2) + "%");
    console.log(montbalncPercent.toFixed(2) + "%");
    console.log(kilimandjaroPercent.toFixed(2) + "%");
    console.log(k2Percent.toFixed(2) + "%");
    console.log(everestPercent.toFixed(2) + "%");
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);