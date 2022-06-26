function isItOnTime(input) {
    let hourExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minutesArrival = Number(input[3]);

    let minutesDifference = 0;
    let hoursDifference = 0;
    
    if (hourArrival === hourExam) {
        if (minutesArrival > minutesExam) {
            minutesDifference = minutesArrival - minutesExam;
            console.log("Late");
            console.log(`${minutesDifference} minutes after the start`);            
        } else if (minutesArrival === minutesExam) {
            console.log("On time");
        } else if (minutesArrival < minutesExam) {
            minutesDifference = minutesExam - minutesArrival;
            if (minutesDifference <= 30) {
                console.log("On time");
                console.log(`${minutesDifference} minutes before the start`);
            } else {
                console.log("Early");
                console.log(`${minutesDifference} minutes before the start`);
            }
        }
    } else if (hourArrival < hourExam) {
        if (minutesArrival > minutesExam) {
            hourExam = hourExam - 1;
            minutesExam = minutesExam + 60;
            hoursDifference = hourExam - hourArrival;
            minutesDifference = minutesExam - minutesArrival;
            if (hoursDifference === 0) {
                if (minutesDifference <= 30) {
                    console.log("On time");
                    console.log(`${minutesDifference} minutes before the start`);
                } else {
                    console.log("Early");
                    console.log(`${minutesDifference} minutes before the start`);
                }
            } else {
                if (minutesDifference < 10) {
                    console.log(`${hoursDifference}:0${minutesDifference} hours before the start`);
                } else {
                    console.log(`${hoursDifference}:${minutesDifference} hours before the start`);
                }
            }
        } else if (minutesArrival === minutesExam) {
            hoursDifference = hourExam - hourArrival;
            console.log("Early");
            console.log(`${hoursDifference}:00 hours before the start`);
        } else if (minutesArrival < minutesExam) {
            hoursDifference = hourExam - hourArrival;
            minutesDifference = minutesExam - minutesArrival;
            console.log("Early");
            if (minutesDifference < 10) {
                console.log(`${hoursDifference}:0${minutesDifference} hours before the start`);
            } else {
                console.log(`${hoursDifference}:${minutesDifference} hours before the start`);
            }

        }
    } else if (hourArrival > hourExam) {
        if (minutesArrival > minutesExam) {
            hoursDifference = hourArrival - hourExam;
            minutesDifference = minutesArrival - minutesExam;
            console.log("Late");
            if (minutesDifference < 10) {
                console.log(`${hoursDifference}:0${minutesDifference} hours after the start`);
            } else {
                console.log(`${hoursDifference}:${minutesDifference} hours after the start`);
            }
        } else if (minutesArrival === minutesExam) {
            hoursDifference = hourArrival - hourExam;
            console.log("Late");
            console.log(`${hoursDifference}:00 hours after the start`);
        } else if (minutesArrival < minutesExam) {
            hourArrival = hourArrival - 1;
            minutesArrival = minutesArrival + 60;
            hoursDifference = hourArrival - hourExam;
            minutesDifference = minutesArrival - minutesExam;
            console.log("Late");
            if (hoursDifference === 0) {
                console.log(`${minutesDifference} minutes after the start`);
            } else {
                if (minutesDifference < 10) {
                    console.log(`${hoursDifference}:0${minutesDifference} hours after the start`);
                } else {
                    console.log(`${hoursDifference}:${minutesDifference} hours after the start`);
                }
            }
        }
    }
}

isItOnTime(["11",
"30",
"12",
"29"])