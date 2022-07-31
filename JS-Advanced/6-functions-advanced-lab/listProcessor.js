function solve(input) {
    let commands = {
        add,
        remove, 
        print
    }

    let collection = [];

    for (let item of input) {
        let [command, str] = item.split(' ');
        commands[command](str);
    }

    function add(str) {
        collection.push(str);
    }

    function remove(str) {
        while(collection.includes(str)) {
            let index = collection.indexOf(str);
            collection.splice(index, 1);
        }
    }

    function print() {
        console.log(collection.join(','));
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);