function oldBooks(input) {
    let index = 0;
    let favoriteBook = input[index];
    index++;
    let counter = 0;
    let isFound = false;

    while(input[index] !== "No More Books") {
        let book = input[index];
        index++;
        counter++;

        if (book === favoriteBook) {
            console.log(`You checked ${counter - 1} books and found it.`);
            isFound = true;
            break;
        } 
    }
    if(!isFound) {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);