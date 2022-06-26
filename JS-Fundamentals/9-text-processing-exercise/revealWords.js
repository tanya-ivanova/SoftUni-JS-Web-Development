function revealWords(words, text) {
    words = words.split(", ");
    text = text.split(" ");
    
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (text[i].includes("*") && text[i].length === words[j].length) {
                text[i] = words[j];
            }
        }
    }

    console.log(text.join(" "));
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');