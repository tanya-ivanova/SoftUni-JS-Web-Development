function lastKSequence (n, k) {
    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        let arr = result.slice(-k);

        for (let element of arr) {
            sum += element;
        }

        result.push(sum);
    }
    console.log(result.join(" "));
}

lastKSequence(6, 3);