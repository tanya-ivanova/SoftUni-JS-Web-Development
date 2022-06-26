function numbers(arr) {
 arr = arr.split(" ").map(Number);
 
 let sum = 0;
 
 for (el of arr) {
     sum += el;
 }

 let average = sum / arr.length;

 let greaterThanAverage = arr.filter(x => x > average);
 greaterThanAverage.sort((a, b) => b - a); 

 let printSequnce = "";
 
 if(greaterThanAverage.length === 0) {
     console.log("No");
 } else if (greaterThanAverage.length < 5) {
    for (let i = 0; i < greaterThanAverage.length; i++) {
        if (i === greaterThanAverage.length - 1) {
            printSequnce += greaterThanAverage[i];
        } else {
            printSequnce += greaterThanAverage[i] + " ";
        }
    }
 } else {
     for (let i = 0; i < 5; i++) {
        if (i === greaterThanAverage.length - 1) {
            printSequnce += greaterThanAverage[i];
        } else {
            printSequnce += greaterThanAverage[i] + " ";
        }
     }     
 }
 console.log(printSequnce); 

}

numbers('-1 -2 -3 -4 -5 -6');