function isItOnTimeForExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);

    if (hourArrival > hourExam && minArrival >= minExam) {
        let hourDifference = hourArrival - hourExam;
        let minDifference = minArrival - minExam;
        console.log("Late");
        if (minDifference < 10) {
            console.log(`${hourDifference}:0${minDifference} hours after the start`);
        } else {
            console.log(`${hourDifference}:${minDifference} hours after the start`);
        }
    } else if (hourArrival > hourExam && minExam > minArrival) {
        console.log("Late");
        let hourDifference = hourArrival - hourExam;
        let minDifference = 60 - minExam + minArrival;

        if (hourDifference === 1) {            
                console.log(`${minDifference} minutes after the start`);
        } else {
            hourDifference = hourDifference - 1;
            if (minDifference < 10) {
                console.log(`${hourDifference}:0${minDifference} hours after the start`);
            } else {
                console.log(`${hourDifference}:${minDifference} hours after the start`);
            }
        }
    } else if (hourArrival === hourExam && minArrival > minExam) {
        let minDifference = minArrival - minExam;
        console.log("Late");        
        console.log(`${minDifference} minutes after the start`);
    } else if (hourArrival === hourExam && minArrival === minExam) {
        console.log("On time");
    } else if (hourArrival === hourExam && ((minArrival - minExam) <= 30)) {
        console.log("On time");
        let minDifference = Math.abs(minArrival - minExam);
        console.log(`${minDifference} minutes before the start`);
    } else if (((hourExam - hourArrival) === 1) && ((60 - minArrival + minExam) <= 30)) {
        console.log("On time");
        let minDifference = 60 - minArrival + minExam;
        console.log(`${minDifference} minutes before the start`);
    } else if (((hourExam - hourArrival) === 1) && ((60 - minArrival + minExam) > 30) && ((60 - minArrival + minExam) < 60)) {
        console.log("Early");
        let minDifference = 60 - minArrival + minExam;
        console.log(`${minDifference} minutes before the start`);
    } else if (hourArrival < hourExam && minExam >= minArrival) {
        let hourDifference = hourExam - hourArrival;
        let minDifference = minExam - minArrival;
        console.log("Early");
        if (minDifference < 10) {
            console.log(`${hourDifference}:0${minDifference} hours before the start`);
        } else {
            console.log(`${hourDifference}:${minDifference} hours before the start`);
        }
    } else if (hourArrival < hourExam && minArrival > minExam) {
        let hourDifference = hourExam - hourArrival - 1;
        let minDifference = 60 - minArrival + minExam;
        console.log("Early");
        if (minDifference < 10) {
            console.log(`${hourDifference}:0${minDifference} hours before the start`);
        } else {
            console.log(`${hourDifference}:${minDifference} hours before the start`);
        }
    }
}