function password(input) {
    let index = 0;
    let userName = input[index];
    index++;
    let userPassword = input[index];
    index++;
    
    while(true) {
        let pass = input[index];
        index++;

        if (pass === userPassword) {
            console.log(`Welcome ${userName}!`);
            break;
        }        
    }
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);