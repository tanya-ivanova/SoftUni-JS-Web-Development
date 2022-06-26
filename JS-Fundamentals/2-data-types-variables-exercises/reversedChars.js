function reversedChaars (x, y, z) {
    let charsSequence = "";
    charsSequence = x + y + z;
    let newSequnce = "";

    for (i = charsSequence.length - 1; i >= 0; i--) {
        if (i === 0) {
            newSequnce += charsSequence[i];
        } else {
            newSequnce += charsSequence[i] + " ";
        }
    }

    console.log(newSequnce);
}

reversedChaars('1',
'L',
'&');