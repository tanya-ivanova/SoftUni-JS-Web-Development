function distinctArray (arr) {
    let filteredArr = arr.filter((x, index) => arr.indexOf(x) === index);
    console.log(filteredArr.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);