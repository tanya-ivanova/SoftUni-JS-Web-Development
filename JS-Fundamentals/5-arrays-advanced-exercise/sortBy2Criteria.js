function sortBy2Criteria (arrOfStrings) {
    //arrOfStrings.sort((a, b) => a.length - b.length || a.localeCompare(b));
    arrOfStrings.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    })


    console.log(arrOfStrings.join("\n"));
}

sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George', "adam", "Adam"]);