function reverseInPlace (arr) {
    let l = arr.length / 2;
    let temp = 0;
    for (let i = 0; i < l; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr.join(" "));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);