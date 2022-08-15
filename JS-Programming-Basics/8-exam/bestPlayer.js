function solution(input) {
    let bestPlayer = '';
    let bestGoals = 0;

    while(input[0] !== 'END') {
        let player = input.shift();
        let goals = Number(input.shift());

        if(goals > bestGoals) {
            bestGoals = goals;
            bestPlayer = player;
        }

        if(goals >= 10) {
            break;
        }
    }

    console.log(`${bestPlayer} is the best player!`);

    if(bestGoals >= 3) {
        console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestGoals} goals.`);
    }
}

solution(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"]);
