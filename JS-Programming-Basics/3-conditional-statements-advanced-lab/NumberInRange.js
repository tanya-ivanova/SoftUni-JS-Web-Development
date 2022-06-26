function isNumberInRange(input) {
    let num = Number(input[0]);

    if (((num >= -100) && (num < 0)) || ((num > 0) && (num <= 100))) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

isNumberInRange(["-25"]);