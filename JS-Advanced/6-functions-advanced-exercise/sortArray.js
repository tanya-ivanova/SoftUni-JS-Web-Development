function solve(arr, str) {
    let sortFunctions = {
        asc,
        desc
    }

    sortFunctions[str](arr);
    return arr;

    function asc(arr) {
        arr.sort((a, b) => a - b);
    }

    function desc(arr) {
        arr.sort((a, b) => b - a);
    }
}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');