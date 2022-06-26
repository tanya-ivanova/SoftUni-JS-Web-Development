function convertToObject (str) {
    let obj = JSON.parse(str);
    let keys = Object.keys(obj);

    for (let key of keys) {
        console.log(`${key}: ${obj[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');