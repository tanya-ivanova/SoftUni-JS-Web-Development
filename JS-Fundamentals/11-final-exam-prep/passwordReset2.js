function solve (input) {
    let password = input.shift();
    
    while(input[0] !== "Done") {
        let [command, ...params] = input.shift().split(' ');
        
        if (command === "TakeOdd") {
            let newPassword = '';

            for (let i = 1; i < password.length; i += 2) {
                newPassword += password[i];                
            }

            password = newPassword;
            console.log(password);
        } else if (command === 'Cut') {
            let index = Number(params[0]);
            let length = Number(params[1]);
            let partToBeRemoved = password.substring(index, index + length);
            password = password.replace(partToBeRemoved, '');
            console.log(password);
        } else if (command === 'Substitute') {
            let substring = params[0];
            let substitute = params[1];

            if (password.includes(substring)) {
                password = password.split(substring).join(substitute);
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }
    }

    console.log(`Your password is: ${password}`);
}

solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);