function solve(arr, start, end) {
    let startIndex = arr.indexOf(start);
    let endIndex = arr.indexOf(end) + 1;

    let result = arr.slice(startIndex, endIndex);
    return result;
}

solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');