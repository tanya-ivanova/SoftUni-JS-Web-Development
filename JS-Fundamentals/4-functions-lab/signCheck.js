function signCheck (num1, num2, num3) {
    let result;

    if (num1 < 0 && num2 > 0 && num3 > 0) {
        result = "Negative";
    } else if (num2 < 0 && num1 > 0 && num3 > 0) {
        result = "Negative";
    } else if (num3 < 0 && num1 > 0 && num2 > 0) {
        result = "Negative";
    } else if ((num1 < 0 && num2 < 0 && num3 > 0) || (num1 < 0 && num3 < 0 && num2 > 0) || (num2 < 0 && num3 < 0 && num1 > 0)) {
        result = "Positive";
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        result = "Negative";
    } else if (num1 > 0 && num2 > 0 && num3 > 0) {
        result = "Positive";
    }

    console.log(result);
}

signCheck(-1,
    -2,
    -3);