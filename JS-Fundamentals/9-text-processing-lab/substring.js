function substring (str, start, count) {
    let substr = str.substring(start, count + start);
    console.log(substr);
}

substring('ASentence', 1, 8)