function splitter (str) {
    str = str.split("");
    let newArr = [];
    newArr.push(str[0]);
    
    for (let i = 1; i < str.length; i++) {
        let charUpperCase = str[i].toUpperCase();        
        
        if (str[i] === charUpperCase) {
            newArr.push(" ");
        }
        newArr.push(str[i]);
    }
    
    let newStr = newArr.join("");
    console.log(newStr.split(" ").join(", "));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');