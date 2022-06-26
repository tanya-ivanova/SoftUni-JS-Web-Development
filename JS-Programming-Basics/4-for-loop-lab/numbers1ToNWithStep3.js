function numbers1ToNWithStep3(input) {
    let n = Number(input);

    for (let i = 1; i <= n; i = i + 3) {
        console.log(i);
    }
}

numbers1ToNWithStep3(15);