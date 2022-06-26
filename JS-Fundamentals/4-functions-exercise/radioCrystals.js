function radioCrystals (input) {
    const [desiredThickness, ...chunks] = input;
    
    for (let i = 0; i < chunks.length; i++) {
        let chunkSize = chunks[i];
        let counterCut = 0;
        let counterLap = 0;
        let counterGrind = 0;
        let counterEtch = 0;        

        console.log(`Processing chunk ${chunkSize} microns`);

        if (chunkSize === desiredThickness) {
            console.log(`Finished crystal ${chunkSize} microns`);
            break;
        } else if (chunkSize > desiredThickness) {
            while (chunkSize / 4 >= desiredThickness) {
                chunkSize = chunkSize / 4;
                counterCut++;
            }
            
            if (counterCut > 0) {
                console.log(`Cut x${counterCut}`);
                chunkSize = Math.floor(chunkSize);
                console.log("Transporting and washing");
            }

            if (chunkSize === desiredThickness) {
                console.log(`Finished crystal ${chunkSize} microns`);
            } else {
                while (chunkSize - chunkSize * 0.2 >= desiredThickness) {
                    chunkSize = chunkSize - chunkSize * 0.2;
                    counterLap++;
                }
                if (counterLap > 0) {
                    console.log(`Lap x${counterLap}`);
                    chunkSize = Math.floor(chunkSize);
                    console.log("Transporting and washing");
                }
                if (chunkSize === desiredThickness) {
                    console.log(`Finished crystal ${chunkSize} microns`);
                } else {
                    while (chunkSize - 20 >= desiredThickness) {
                        chunkSize = chunkSize - 20;
                        counterGrind++;
                    }
                    if (counterGrind > 0) {
                        console.log(`Grind x${counterGrind}`);
                        chunkSize = Math.floor(chunkSize);
                        console.log("Transporting and washing");
                    }
                    if (chunkSize === desiredThickness) {
                        console.log(`Finished crystal ${chunkSize} microns`);
                    } else {
                        while ((chunkSize - 2 >= desiredThickness) || (chunkSize - 1 === desiredThickness)) {
                            chunkSize = chunkSize - 2;
                            counterEtch++;
                        }
                        if (counterEtch > 0) {
                            console.log(`Etch x${counterEtch}`);
                            chunkSize = Math.floor(chunkSize);
                            console.log("Transporting and washing");
                        }
                        if (chunkSize === desiredThickness) {
                            console.log(`Finished crystal ${chunkSize} microns`);
                        } else {
                            chunkSize = chunkSize + 1;
                            console.log("X-ray x1");
                            console.log(`Finished crystal ${chunkSize} microns`);
                        }
                    }
                }
            }
        }
    }
}

radioCrystals([1000, 1000]);