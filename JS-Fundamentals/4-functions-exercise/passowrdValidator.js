function passwordValidator (password) {
    let isValid = true;
    let digitsCounter = 0;

    if (password.length < 6 || password.length > 10) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        let charCode = char.charCodeAt(0);

        if (charCode >= 48 && charCode <= 57) {
            digitsCounter++;
        }         
    }

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        let charCode = char.charCodeAt(0);

        if (!((charCode >= 48 && charCode <= 57) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
            isValid = false;
            console.log("Password must consist only of letters and digits");
            break;
        }               
    }
    if (digitsCounter < 2) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

passwordValidator('poeejnrf');