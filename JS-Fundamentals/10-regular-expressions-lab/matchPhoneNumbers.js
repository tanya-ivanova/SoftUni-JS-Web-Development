function matchPhoneNumbers(input) {
    let pattern = /( |^)\+359( |-)2\2\d{3}\2\d{4}\b/g;
    let validPhoneNumbers = [];
    let validPhone = pattern.exec(input[0]);

    while(validPhone !== null) {
        validPhoneNumbers.push(validPhone[0].trim());
        validPhone = pattern.exec(input[0]);
    }

    console.log(validPhoneNumbers.join(", "));
}

matchPhoneNumbers(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])