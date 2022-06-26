function convertToJson (name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }

    let jsonString = JSON.stringify(person);
    console.log(jsonString);
}

convertToJson('George', 'Jones', 'Brown');