function memoryGame(input) {
    let arr = input.shift().split(" ");
    let moves = 0;
    
    while(input[0] !== "end") {
        let [index1, index2] = input.shift().split(" ").map(Number);
        moves++;
        
        if (index1 === index2 || index1 > arr.length - 1 || index2 > arr.length - 1 || index1 < 0 || index2 < 0) {
            arr.splice(arr.length/2, 0, "-" + moves + "a", "-" + moves + "a"); 
            console.log("Invalid input! Adding additional elements to the board");
            continue;           
        }
        
        if (arr[index1] === arr[index2]) {
            console.log(`Congrats! You have found matching elements - ${arr[index1]}!`);
            
            arr.splice(Math.min(index1, index2), 1);
            arr.splice(Math.max(index1, index2) - 1, 1);            
        } else {
            console.log("Try again!");
        }

        if(arr.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }
    }
    if(arr.length > 0) {
        console.log("Sorry you lose :(");
        console.log(arr.join(" "));
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]);