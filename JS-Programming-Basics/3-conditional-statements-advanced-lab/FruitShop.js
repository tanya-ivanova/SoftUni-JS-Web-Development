function whatIsThePrice(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    let valid = true;

    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit === "banana") {
                price = quantity * 2.50;
            } else if (fruit === "apple") {
                price = quantity * 1.20;
            } else if (fruit === "orange") {
                price = quantity * 0.85;
            } else if (fruit === "grapefruit") {
                price = quantity * 1.45;
            } else if (fruit === "kiwi") {
                price = quantity * 2.70;
            } else if (fruit === "pineapple") {
                price = quantity * 5.50;
            } else if (fruit === "grapes") {
                price = quantity * 3.85;
            } else {
                console.log("error");
                valid = false;
            }
            break;
        case "Saturday":
        case "Sunday":
            if (fruit === "banana") {
                price = quantity * 2.70;
            } else if (fruit === "apple") {
                price = quantity * 1.25;
            } else if (fruit === "orange") {
                price = quantity * 0.90;
            } else if (fruit === "grapefruit") {
                price = quantity * 1.60;
            } else if (fruit === "kiwi") {
                price = quantity * 3.00;
            } else if (fruit === "pineapple") {
                price = quantity * 5.60;
            } else if (fruit === "grapes") {
                price = quantity * 4.20;
            } else {
                console.log("error");
                valid = false;
            }
            break;
        default:
            console.log("error");
            valid = false;
            break;
    }

    if (valid) {
        console.log(price.toFixed(2));
    }
}

whatIsThePrice(["tomato",
"Monday",
"0.5"])
