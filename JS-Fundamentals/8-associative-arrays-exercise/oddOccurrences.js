function oddOccurrences(input) {
    let tokens = input.toLowerCase().split(" ");
    let obj = {};

    for (let word of tokens) {
        if(!obj.hasOwnProperty(word)) {
            obj[word] = 1;
        } else {
            let counter = obj[word];
            obj[word] = counter + 1;
        }
    }
    let arr = Object.entries(obj);
    arr.sort((a, b) => b[1] - a[1]);
    let printLine = "";
    
    for (let singleArr of arr) {
        if (singleArr[1] % 2 !== 0) {
            printLine += singleArr[0] + " ";
        }
    }
    console.log(printLine);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');