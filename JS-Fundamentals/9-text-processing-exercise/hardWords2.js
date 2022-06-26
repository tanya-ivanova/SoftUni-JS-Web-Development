function hardWords2 (input) {
    let text = input[0];
    let arrOfWords = input[1];
    let index = 0;
    
    while (text.indexOf("_", index) !== -1) {
        index = text.indexOf("_");
        let counter = 0;

        while(text[index] === "_") {
            counter++;
            index++;
        }

        for (let word of arrOfWords) {
            if(word.length === counter) {
                text = text.replace("_".repeat(counter), word);
                break;
            }
        }
        index = index + counter;
    }
    console.log(text);
}

hardWords2(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);