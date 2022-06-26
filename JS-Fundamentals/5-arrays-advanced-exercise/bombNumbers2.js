function bombs2 (arr, bombPower) {
    let bombNumber = bombPower[0];
    let power = bombPower[1];
    
    detonation(power);

    //const sumArr2 = arr.reduce((previous, current) => (previous + current), 0);
          
    console.log(sumArr(arr));

    function detonation(power) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === bombNumber) {
                if (i - power >= 0) {
                    arr.splice(i - power, power * 2 + 1);             
                } else {
                    arr.splice(0, power + 1 + i);
                }
                i = -1;              
            }
        }
    }

    function sumArr (arr) {
        let sumEl = 0;
        for (let element of arr) {
            sumEl += element;
        }
        return sumEl; 
    }

    
}

bombs2([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);