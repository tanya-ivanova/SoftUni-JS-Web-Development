function repeatString (str, repeatCount) {
    let result = "";

    for (let i = 0; i < repeatCount; i++) {
        result += str;
    }

    return result;
}

repeatString("abc", 3);