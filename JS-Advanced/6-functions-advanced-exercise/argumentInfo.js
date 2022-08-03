function solve(...params) {    

    printTypeValue(params);
    printTypes(params);

    function printTypeValue(input) {
        for (let item of input) {
            console.log(`${typeof(item)}: ${item}`);
        }
    }

    function printTypes(input) {
        let typesInObj = {};
        
        for (let item of input) {
            let type = typeof(item);

            if(!typesInObj.hasOwnProperty(type)) {
                typesInObj[type] = 1;
            } else {
                typesInObj[type] += 1;
            }
        }
        Object.entries(typesInObj)
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} = ${e[1]}`));
    }
}

solve('cat', 42, function () { console.log('Hello world!'); }, 'dog', 2, 5);