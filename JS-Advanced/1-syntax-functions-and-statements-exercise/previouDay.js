function solve(y, m, d) {
    let date = new Date(y, m - 1, d - 1);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    console.log(`${year}-${month}-${day}`);
}

solve(2016, 9, 30);
solve(2016, 10, 1);