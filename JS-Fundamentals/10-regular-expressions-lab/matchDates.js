function matchDates(input) {
    let pattern = /\b(?<day>\d{2})(.|-|\/)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let validDates = [];
    let validDate = pattern.exec(input[0]);

    while(validDate !== null) {
        validDates.push(validDate.groups);
        validDate = pattern.exec(input[0]);
    }
    
    validDates.forEach(x => console.log(`Day: ${x.day}, Month: ${x.month}, Year: ${x.year}`));
    
}

matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);