function barIncome(input) {
    let pattern = /(%[A-Z][a-z]+%)[^\|\$%\.]*(<\w+>)[^\|\$%\.]*(\|\d+\|)[^\|\$%\.\d]*(\d+\.*\d*\$)/g;
    let totalIncome = 0;

    while(input[0] !== "end of shift") {
        let line = input.shift();

        let match = pattern.exec(line);

        while(match !== null) {
            let name = match[1].substring(1, match[1].length - 1);
            let product = match[2].substring(1, match[2].length - 1);
            let quantity = Number(match[3].substring(1, match[3].length - 1));
            let price = Number(match[4].substring(0, match[4].length - 1));
            totalIncome += quantity * price;
            console.log(`${name}: ${product} - ${(quantity * price).toFixed(2)}`);
            match = pattern.exec(line);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

barIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);