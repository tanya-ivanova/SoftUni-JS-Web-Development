function rightPlace (firstStr, char, secondStr) {
    let resultStr = "";

    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr[i] === "_") {
            resultStr += char
        } else {
            resultStr += firstStr[i];
        }
    }

    let output = resultStr === secondStr ? "Matched" : "Not Matched";
    console.log(output);
}

rightPlace('Str_ng', 'i', 'String');