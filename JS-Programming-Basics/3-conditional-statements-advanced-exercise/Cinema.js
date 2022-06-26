function cinemaTicketsIncome(input) {
    let projection = input[0];
    let raws = Number(input[1]);
    let columns = Number(input[2]);

    let income = 0;

    if (projection === "Premiere") {
        income = raws * columns * 12.00;
    } else if (projection === "Normal") {
        income = raws * columns * 7.50;
    } else if (projection === "Discount") {
        income = raws * columns * 5.00;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinemaTicketsIncome(["Normal",
"21",
"13"]);