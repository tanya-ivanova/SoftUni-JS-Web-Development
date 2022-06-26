function requiredReading (pages, pagesPerHour, days) {
    let hoursPerDay = (pages / pagesPerHour) / days;
    console.log(hoursPerDay);
}

requiredReading(212,
    20 ,
    2 );