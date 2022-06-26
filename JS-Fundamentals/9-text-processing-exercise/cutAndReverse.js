function cutAndReverse (text) {
    let firstHalf = text.substring(0, text.length / 2);
    let secondHalf = text.substring(text.length / 2);
    
    let first = "";
    let second = "";
    for (let i = firstHalf.length - 1; i >= 0; i--) {
        first += firstHalf[i];
    }

    for (let i = secondHalf.length - 1; i >= 0; i--) {
        second += secondHalf[i];
    }
    console.log(first);
    console.log(second);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');