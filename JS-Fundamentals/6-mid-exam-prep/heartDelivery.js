function heartDelivery (input) {
    let arr = input.shift();
    arr = arr.split("@");
    arr = arr.map(Number);
    let index = 0;
    
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i];        
        tokens = tokens.split(" ");
        let command = tokens[0];
        let jumpLength = Number(tokens[1]);        

        if (command === "Jump") {
            index = index + jumpLength;
            if(index > arr.length - 1) {
                index = 0;
            }
            if (arr[index] === 0) {
                console.log("Place " + index + " already had Valentine's day.")
            } else {
                arr[index] = arr[index] - 2;
                if (arr[index] === 0) {
                    console.log("Place " + index + " has Valentine's day.");
                }
            }
        } else if (command === "Love!") {
            console.log("Cupid's last position was " + index + ".");
            let arrHousesWithValetine = arr.filter(x => x === 0);
            
            if (arr.length === arrHousesWithValetine.length) {
                console.log("Mission was successful.");
            } else {
                console.log("Cupid has failed " + (arr.length - arrHousesWithValetine.length) + " places.");
            }
        }
    }
}

heartDelivery((["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]));

heartDelivery((["4@2@4@2",
"Jump 1",
"Jump 2",
"Jump 1",
"Jump 2",
"Jump 2",
"Jump 2",
"Love!"]));