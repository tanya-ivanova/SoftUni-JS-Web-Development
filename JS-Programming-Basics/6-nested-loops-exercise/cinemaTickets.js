function cinemaTickets(input) {
    let index = 0;
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;    
    
    while (input[index] !== "Finish") {
        let movieName = input[index];
        index++;
        let freeSeets = Number(input[index]);
        index++;
        let takenSeets = 0;

        for (i = 1; i <= freeSeets; i++) {
            let ticket = input[index];
            index++;

            if (ticket === "standard") {
                totalTickets++;
                standardTickets++;
                takenSeets++;
            } else if (ticket === "student") {
                totalTickets++;
                studentTickets++;
                takenSeets++;
            } else if (ticket === "kid") {
                totalTickets++;
                kidsTickets++;
                takenSeets++;
            } else  if (ticket === "End") {
                break;
            }
        }
        let hallPercentage = takenSeets / freeSeets * 100;
        console.log(`${movieName} - ${hallPercentage.toFixed(2)}% full.`);
    }
    let studentPercentage = studentTickets / totalTickets * 100;
    let standardPercentage = standardTickets / totalTickets * 100;
    let kidsPercentage = kidsTickets / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standardPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPercentage.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);