function whatIsThePrice(input) {
    let month = input[0];
    let days = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    if ((month === "May") || (month === "October")) {
        studioPrice = 50 * days;
        apartmentPrice = 65 * days;

        if ((days > 7) && (days <= 14)) {
            studioPrice = studioPrice * 0.95;
        }
        if (days > 14) {
            studioPrice = studioPrice * 0.70;
            apartmentPrice = apartmentPrice * 0.90;
        }
    } else if ((month === "June") || (month === "September")) {
        studioPrice = 75.20 * days;
        apartmentPrice = 68.70 * days;
        if (days > 14) {
            studioPrice = studioPrice * 0.80;
            apartmentPrice = apartmentPrice * 0.90;
        }
    } else if ((month === "July") || (month === "August")) {
        studioPrice = 76 * days;
        apartmentPrice = 77 * days;
        if (days > 14) {
            apartmentPrice =apartmentPrice * 0.90;
        }
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

whatIsThePrice(["August",
"20"])