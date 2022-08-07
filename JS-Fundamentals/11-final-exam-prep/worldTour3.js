function solve(input) {
    let stops = input.shift();

    while (input[0] !== 'Travel') {
        const [command, ...params] = input.shift().split(':');

        if(command === 'Add Stop') {
            let index = Number(params[0]);
            let stop = params[1];

            if(index >= 0 && index < stops.length) {
                let rightPart = stops.substring(0, index);
                let leftPart = stops.substring(index);
                stops = rightPart + stop + leftPart;
                
            }
            console.log(stops);

        } else if (command === 'Remove Stop') {
            let start = Number(params[0]);
            let end = Number(params[1]);

            if(start >= 0 && start < stops.length && end >= 0 && end < stops.length) {
                let rigthPart = stops.substring(0, start);
                let leftPart = stops.substring(end + 1);
                stops = rigthPart + leftPart;                
            }
            console.log(stops);

        } else if(command === 'Switch') {
            let oldStr = params[0];
            let newStr = params[1];

            if(stops.includes(oldStr)) {
                stops = stops.split(oldStr).join(newStr);
            }
            console.log(stops);
        }
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

solve(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);
