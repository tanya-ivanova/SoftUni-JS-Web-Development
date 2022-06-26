function integerOrFloat (num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let type = "Integer";

    if (sum % 1 !== 0) {
        type = "Float";
    }

    console.log(`${sum} - ${type}`);
}

integerOrFloat(9, 100, 1.1);