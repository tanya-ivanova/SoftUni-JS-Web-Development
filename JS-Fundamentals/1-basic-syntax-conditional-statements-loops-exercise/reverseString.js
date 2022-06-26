function reverseString(string) {
    let reversedString = "";
    for(i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }

    console.log(reversedString);
}

reverseString("Hello");