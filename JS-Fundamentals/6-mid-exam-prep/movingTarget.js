function movingTarget(input) {
    let arr = input.shift().split(" ").map(Number);
    
    while (input[0] !== "End") {
        let tokens = input.shift(). split(" ");
        let command = tokens[0];
        let index = Number(tokens[1]);
        let value = Number(tokens[2]);
        
        if (command === "Shoot") {
            if (index >= 0 && index < arr.length) {
                arr[index] -= value;

                if (arr[index] <= 0) {
                    arr.splice(index, 1);
                }
            }
        } else if (command === "Add") {
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command === "Strike") {
            if (index - value < 0 || index + value > arr.length - 1) {
                console.log("Strike missed!");
            } else {
                arr.splice(index - value, 2 * value + 1);
            }
        }
    }
    console.log(arr.join("|"));
}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]);