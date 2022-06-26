function lettersChangeNumbers(str) {
    str = str.split(" ");
    let arrOfStrings = [];
    
    /*for (let element of str) {
        if(element !== "") {
            arrOfStrings.push(element);
        }
    }*/

    arrOfStrings = str.filter(x => x!== "");
    
    let upperCaseAlphabet = {
        A: "1",
        B: "2",
        C: "3",
        D: "4",
        E: "5",
        F: "6",
        G: "7",
        H: "8",
        I: "9",
        J: "10",
        K: "11",
        L: "12",
        M: "13",
        N: "14",
        O: "15",
        P: "16",
        Q: "17",
        R: "18",
        S: "19",
        T: "20",
        U: "21",
        V: "22",
        W: "23",
        X: "24",
        Y: "25",
        Z: "26"
    }

    let lowerCaseAlphabet = {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5",
        f: "6",
        g: "7",
        h: "8",
        i: "9",
        j: "10",
        k: "11",
        l: "12",
        m: "13",
        n: "14",
        o: "15",
        p: "16",
        q: "17",
        r: "18",
        s: "19",
        t: "20",
        u: "21",
        v: "22",
        w: "23",
        x: "24",
        y: "25",
        z: "26"
    }
    let totalSum = 0;

    for (let element of arrOfStrings) {
        let letterBefore = element[0];
        let letterAfter = element[element.length - 1];
        let number = Number(element.substring(1, element.length - 1));                

        if (letterBefore === letterBefore.toUpperCase()) {
            let positionBefore = Number(upperCaseAlphabet[letterBefore]);
            number = number / positionBefore;
        } else {
            let positionBefore = Number(lowerCaseAlphabet[letterBefore]);
            number = number * positionBefore;
        }

        if (letterAfter === letterAfter.toUpperCase()) {
            let positionAfter = Number(upperCaseAlphabet[letterAfter]);
            number = number - positionAfter;
        } else {
            let positionAfter = Number(lowerCaseAlphabet[letterAfter]);
            number = number + positionAfter;
        }
        totalSum += number;
    }    
    console.log(totalSum.toFixed(2));
}

lettersChangeNumbers('A12b s17G');
console.log("---");
lettersChangeNumbers('P34562Z q2576f   H456z');
console.log("---");
lettersChangeNumbers('a1A');