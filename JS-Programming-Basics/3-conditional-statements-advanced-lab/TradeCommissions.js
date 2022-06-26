function tradeCommission(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0;
    let valid = true;

    if (city === "Sofia") {
        if ((sales >= 0) && (sales <= 500)) {
            commission = sales * 0.05;
        } else if ((sales > 500) && (sales <= 1000)) {
            commission = sales * 0.07;
        } else if ((sales > 1000) && (sales <= 10000)) {
            commission = sales * 0.08;
        } else if (sales > 10000) {
            commission = sales * 0.12;
        } else {
            valid = false;
        }
    } else if (city === "Varna") {
        if ((sales >= 0) && (sales <= 500)) {
            commission = sales * 0.045;
        } else if ((sales > 500) && (sales <= 1000)) {
            commission = sales * 0.075;
        } else if ((sales > 1000) && (sales <= 10000)) {
            commission = sales * 0.10;
        } else if (sales > 10000) {
            commission = sales * 0.13;
        } else {
            valid = false;
        }
    } else if (city === "Plovdiv") {
        if ((sales >= 0) && (sales <= 500)) {
            commission = sales * 0.055;
        } else if ((sales > 500) && (sales <= 1000)) {
            commission = sales * 0.08;
        } else if ((sales > 1000) && (sales <= 10000)) {
            commission = sales * 0.12;
        } else if (sales > 10000) {
            commission = sales * 0.145;
        } else {
            valid = false;
        }
    } else {
        valid = false;
    }

    if(valid) {
        console.log(commission.toFixed(2));
    } else {
        console.log("error");
    }
}

tradeCommission(["Kaspichan",
"50"]);