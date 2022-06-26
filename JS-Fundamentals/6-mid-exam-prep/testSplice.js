function testSplice(arr) {
    arr.splice(-2);
    console.log(arr);
    arr.splice(-6);
    console.log(arr);
}

testSplice([1, 2, 3, 4, 5])