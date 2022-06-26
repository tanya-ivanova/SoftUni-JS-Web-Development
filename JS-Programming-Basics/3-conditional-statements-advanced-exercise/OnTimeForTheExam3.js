function isItOnTime(input) {
    let hourExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minutesArrival = Number(input[3]);

    let examTime = hourExam * 60 + minutesExam;
    let arrivalTime = hourArrival * 60 + minutesArrival;

    if (arrivalTime > examTime) {
        console.log("Late");
        if (arrivalTime - examTime <= 59) {
            console.log(`${arrivalTime - examTime} minutes after the start`)
        } else {
            let timeDifference = arrivalTime - examTime;
            let hours = Math.floor(timeDifference / 60);
            let minutes = timeDifference - (hours * 60);
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else if (arrivalTime < examTime) {
        if (examTime - arrivalTime <= 30) {
            console.log("On time");
            console.log(`${examTime - arrivalTime} minutes before the start`);
        } else if ((examTime - arrivalTime > 30) && (examTime - arrivalTime <= 59)) {
            console.log("Early");
            console.log(`${examTime - arrivalTime} minutes before the start`);
        } else {
            console.log("Early");
            let timeDifference = examTime - arrivalTime;
            let hours = Math.floor(timeDifference / 60);
            let minutes = timeDifference - (hours * 60);
            if (minutes != 60) {
                if (minutes < 10) {
                    console.log(`${hours}:0${minutes} hours before the start`);
                } else {
                    console.log(`${hours}:${minutes} hours before the start`);
                }
            }  else {
                hours = hours + 1;
                minutes = 0;
                console.log(`${hours}:0${minutes} hours before the start`);
            } 
            
        }
    } else if (arrivalTime = examTime) {
        console.log("On time");
    }
}

isItOnTime(["11",
"30",
"12",
"29"])