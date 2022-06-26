function multiplicationTable(number) {
    for(i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} X ${i} = ${result}`);
    }
}

multiplicationTable(5);