function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day + 1);
    
    let y = date.getFullYear();
    let m = date.getMonth();
    let d = date.getDate();

    console.log(`${y}-${m + 1}-${d}`);
}

nextDay(2020, 3, 24);