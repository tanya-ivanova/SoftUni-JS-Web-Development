function calorieObject (input) {
    let obj = {};

    for (let i = 0; i < input.length; i += 2) {
        let key = input[i];
        let value = Number(input[i + 1]);

        obj[key] = value;
    }

    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);