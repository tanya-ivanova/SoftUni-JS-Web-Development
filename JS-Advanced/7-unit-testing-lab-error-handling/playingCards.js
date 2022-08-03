function solve(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    if(faces.includes(face) === false) {
        throw new Error('Error');
    }

    if(suits[suit] === undefined) {
        throw new Error('Error');
    }

    const result = {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    }

    return result;
}

solve('A', 'S').toString();
solve('10', 'H').toString();
solve('1', 'C').toString();