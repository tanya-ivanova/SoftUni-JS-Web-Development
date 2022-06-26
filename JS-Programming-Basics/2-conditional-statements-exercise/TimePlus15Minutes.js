function calculateTimePlus15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let minutesPlus15 = minutes + 15;

    if (minutesPlus15 > 59) {
        minutes = minutesPlus15 - 60;
        hour = hour + 1;
    } else {
        minutes = minutesPlus15;
    }

    if (hour === 24) {
        hour = 0;
    }

    if (minutes < 10) {
        console.log(`${hour}:0${minutes}`);
    } else {
        console.log(`${hour}:${minutes}`);
    }
}

calculateTimePlus15Minutes(["23", "59"]);