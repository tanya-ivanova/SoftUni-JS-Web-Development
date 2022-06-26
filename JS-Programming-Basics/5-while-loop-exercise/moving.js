function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let heigth = Number(input[index]);
    index++;
    let wholeSpace = width * length * heigth;
    let spaceTaken = 0;
    let isSpaceTaken = false;

    while (input[index] !== "Done") {
        let cardboxs = Number(input[index]);
        index++;
        spaceTaken = spaceTaken + cardboxs;
        if (spaceTaken > wholeSpace) {
            console.log(`No more free space! You need ${spaceTaken - wholeSpace} Cubic meters more.`);
            isSpaceTaken = true;
            break;
        }
    }
    if (!isSpaceTaken) {
        console.log(`${wholeSpace - spaceTaken} Cubic meters left.`);
    }
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"]);