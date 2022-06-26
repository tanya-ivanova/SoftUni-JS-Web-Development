function equalArrays (arr1, arr2) {
    let areEqual = true;
    let indexDifference = 0;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[i] !== arr2[i]) {
            areEqual = false;
            indexDifference = i;
            break;
        }
    }
    let sum = 0;

    if (areEqual) {
        for (let el of arr1) {
            let num = Number(el);
            sum += num;
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexDifference} index`);
    }
}

equalArrays(['10','20','30'], ['10','20','30', '50']);
equalArrays(['1'], ['10']);