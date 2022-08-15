function solve(input) {
    let capacity = Number(input.shift());
    let counterCuitcases = 0;
    let noMoreSpace = false;
    

    while(input[0] !== 'End') {
        let suitcaseVolume = Number(input.shift());
        counterCuitcases++;

        if(counterCuitcases === 3) {
            suitcaseVolume = suitcaseVolume * 1.1;
        }
       
        if(suitcaseVolume > capacity) {
            console.log('No more space!');
            counterCuitcases--;
            noMoreSpace = true;
            break;
        }
        
        capacity -= suitcaseVolume;
    }

    if(!noMoreSpace) {
        console.log('Congratulations! All suitcases are loaded!');
    }

    console.log(`Statistic: ${counterCuitcases} suitcases loaded.`);
}

solve(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"]);
