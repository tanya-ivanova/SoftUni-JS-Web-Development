function solve(input) {
    let commands = {
        create,
        createinherit,
        set,
        print
    }

    let cars = {};

    for (let item of input) {
        let [command, ...params] = item.split(' ');

        if (command === 'create') {
            if(params.includes('inherit')) {
                let name = params[0];
                let parentName = params[2];
                command += params[1];
                commands[command](name, parentName);
            } else {
                let name = params[0];
                commands[command](name);
            }
        } else if (command === 'set') {
            let name = params[0];
            let key = params[1];
            let value = params[2];
            commands[command](name, key, value);
        } else if (command === 'print') {
            let name = params[0];
            commands[command](name);
        }
    }

    function create(name) {
        cars[name] = {};
    }

    function createinherit(name, parentName) {
        cars[name] = {
            inherit: parentName,            
        }
    }

    function set(name, key, value) {
        cars[name][key] = value;        
    }

    function print(name) {         
        let entries = Object.entries(cars[name]);
        let output = '';
        let inherit = '';
        for (let i = 0; i < entries.length; i++) {
            if(entries[i].includes('inherit')) {
                inherit = entries[i][1];
            }
            if(!entries[i].includes('inherit')) {
                output += `${entries[i][0]}:${entries[i][1]}`;
                if(i !== entries.length - 1) {
                    output += ',';
                }
            }
        }
        while (inherit !== '') {
            if(output !== '') {
                output += ',';
            }
            let entriesForParent = Object.entries(cars[inherit]);            
            inherit = '';
            for (let i = 0; i < entriesForParent.length; i++) {
                if(entriesForParent[i].includes('inherit')) {
                    inherit = entriesForParent[i][1];
                }
                if(!entriesForParent[i].includes('inherit')) {
                    output += `${entriesForParent[i][0]}:${entriesForParent[i][1]}`;
                    if(i !== entriesForParent.length - 1) {
                        output += ',';
                    }
                }
            }            
        }        
        console.log(output);    
    }
}

solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']);