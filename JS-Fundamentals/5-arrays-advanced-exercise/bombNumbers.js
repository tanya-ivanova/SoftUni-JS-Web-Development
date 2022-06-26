function bombs (arr, bombPower) {
    let bombNumber = bombPower[0];
    let power = bombPower[1];

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
    let sum = 0;

    for (let element of arr) {
        sum += element;
    } 
    //console.log(arr);   
    console.log(sum);
}

bombs([1, 7, 7, 7, 2, 5, 7],
    [7, 3]);