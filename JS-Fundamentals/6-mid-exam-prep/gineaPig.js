function gineaPig (input) {
    let [food, hay, cover, gineaWeight] = input;
    food = Number(food) * 1000;
    hay = Number(hay) * 1000;
    cover = Number(cover) * 1000;
    gineaWeight = Number(gineaWeight) * 1000;
    isFoodEnough = true;
    isHayEnough = true;
    isCoverEnough = true;

    for (let i = 1; i <= 30; i++) {
        food -= 300;

        if (i % 2 === 0) {
            hay -= food * 0.05;
        }

        if (i % 3 === 0) {
            cover-= gineaWeight / 3;
        }

        if (food <= 0) {
            isFoodEnough = false;
            break;
        }

        if (hay <= 0) {
            isHayEnough = false;
            break;
        }

        if (cover <= 0) {
            isCoverEnough = false;
            break;
        }
    }
    food = food / 1000;
    hay = hay / 1000;
    cover = cover / 1000;
    
    if (isFoodEnough && isHayEnough && isCoverEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    } else {
        console.log("Merry must go to the pet store!");
    }
}

gineaPig(["0",
"0",
"0",
"1"]);