function meetings (input) {
    let assocArray = {};

    for (let line of input) {
        let [day, name] = line.split(" ");

        if (assocArray.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            assocArray[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let day in assocArray) {
        console.log(`${day} -> ${assocArray[day]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);