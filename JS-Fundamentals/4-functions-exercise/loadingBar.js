function loadingBar (number) {
 let loadingFirst = "%";
 let loadingSecond = ".";
 let loadingFirstSequence = loadingFirst.repeat(number/10);
 let loadingSecondSequence = loadingSecond.repeat(10 - number/10);

 if (number !== 100) {
     console.log(`${number}% [${loadingFirstSequence}${loadingSecondSequence}]`);
     console.log("Still loading...");
 } else {
     console.log(`${number}% Complete!`);
     console.log(`[${loadingFirstSequence}]`);
 }
}


loadingBar(30);
loadingBar(50);
loadingBar(100);