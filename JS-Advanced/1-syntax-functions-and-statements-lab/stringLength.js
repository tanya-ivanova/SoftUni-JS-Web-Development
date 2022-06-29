function solve(str1, str2, str3) {
    let sum = str1.length + str2.length + str3.length;
    let averageLength = Math.floor(sum / 3);

    console.log(sum);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');