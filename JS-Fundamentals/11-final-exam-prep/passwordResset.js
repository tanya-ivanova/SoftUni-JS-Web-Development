function passwordReset(input) {
    let password = input.shift();
    
    
    while (input[0] !== "Done") {
        let [command, ...params] = input.shift().split(" ");
        
        if(command === "TakeOdd") {
            let passwordOdd = "";
            for (let i = 1; i < password.length; i += 2) {
                passwordOdd += password[i];
            }
            password = passwordOdd;
            console.log(password);
        } else if (command === "Cut") {
            let index = Number(params[0]);
            let length = Number(params[1]);

            let substringToBeRemoved = password.substring(index, length + index);
            let ind = password.indexOf(substringToBeRemoved);
            let left = password.substring(0, ind);
            let right = password.substring(ind + length);
            password = left + right;
            //password = password.replace(substringToBeRemoved, "");
            console.log(password);
        } else if (command === "Substitute") {
            let substring = params[0];
            let substitute = params[1];
            

            if (password.includes(substring)) {
                //password = password.split(substring).join(substitute);
                let index = password.indexOf(substring);

                while(index !== -1) {
                    let left = password.substring(0, index);
                    let right = password.substring(index + substring.length);
                    password = left + substitute + right;
                    index = password.indexOf(substring, index + substitute.length);
                }
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }
    console.log(`Your password is: ${password}`);
}

passwordReset(["0n9yup8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 20 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]);