function solve(input) {
    let bitcoins = Number(input[0]);
    let chineseUan = Number(input[1]);
    let commission = Number(input[2]);

    let leva = (bitcoins * 1168) + ((chineseUan * 0.15) * 1.76);
    let euro = (leva / 1.95) - ((leva / 1.95) * commission/100);

    console.log(euro.toFixed(2));
}

solve(["20",
"5678",
"2.4"]);