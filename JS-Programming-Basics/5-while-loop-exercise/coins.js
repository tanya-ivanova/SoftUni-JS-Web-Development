function coins(input) {
    let sum = Number(input[0]);
    sum = Math.floor(sum * 100);
    let counter = 0;

    while (sum > 0) {
        counter++;

        if (sum >= 200) {
            sum = sum - 200;
        } else if (sum >= 100) {
            sum = sum - 100;
        } else if (sum >= 50) {
            sum = sum - 50;
        } else if (sum >= 20) {
            sum = sum - 20;
        } else if (sum >= 10) {
            sum = sum - 10;
        } else if (sum >= 5) {
            sum = sum - 5;
        } else if (sum >= 2) {
            sum = sum - 2;
        } else if (sum >= 1) {
            sum =sum - 1;
        }
    }
    console.log(counter);
}

coins(["1.23"]);