function whatIsTheFigureArea(input) {
    let figure = input[0];
    let area = 0;

    if (figure === "square") {
        let side = Number(input[1]);
        area = side * side;
    }  else if (figure === "rectangle") {
        let side1 = Number(input[1]);
        let side2 = Number(input[2]);
        area = side1 * side2;
    }  else if (figure === "circle") {
        let radius = Number(input[1]);
        area = radius * radius * Math.PI;
    } else if (figure === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = a * h / 2;
    }

    console.log(area.toFixed(3));
}

whatIsTheFigureArea(["rectangle",
"7",
"2.5"]);