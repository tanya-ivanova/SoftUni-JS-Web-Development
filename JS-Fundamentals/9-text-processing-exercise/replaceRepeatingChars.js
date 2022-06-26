function replaceRepeatingChars (str) {
    str = str.split("");
    
    for (let i = 0; i < str.length; i++) {
        if (str[i + 1] === str[i]) {
            str.splice(i + 1, 1);
            i -= 1;
        }
    }

    console.log(str.join(""));
}

replaceRepeatingChars('qqqwerqwecccwd');