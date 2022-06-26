function smallestTwoNumbers2 (arr) {    
    console.log(arr.sort((a, b) => a -b).slice(0, 2).join(" "));
}

smallestTwoNumbers2([30, 15, 50, 5]);