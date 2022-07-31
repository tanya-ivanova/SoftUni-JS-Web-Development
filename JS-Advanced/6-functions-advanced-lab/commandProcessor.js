function solution() {
    let internalString = '';

    function append(str) {
        internalString += str;
    }

    function removeStart(n) {
        internalString = internalString.slice(n);
    }

    function removeEnd(n) {
        internalString = internalString.slice(0, -n);
    }

    function print() {
        console.log(internalString);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();