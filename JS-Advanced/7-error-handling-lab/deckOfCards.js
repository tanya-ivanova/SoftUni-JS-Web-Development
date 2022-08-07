function createDeckOfCards(arr) {
    let resultDeckOfCards = [];

    arr.forEach(element => {
        let face = element.slice(0, -1);
        let suit = element.slice(-1);

        try{
            let card = createCard(face, suit);
            resultDeckOfCards.push(card);
        } catch {
            resultDeckOfCards = [`Invalid card: ${element}`];
        }
    });

    console.log(resultDeckOfCards.join(' '));

    function createCard(face, suit) {
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
}

createDeckOfCards(['AS', '10D', 'KH', '2C']);
createDeckOfCards(['5S', '3D', 'QD', '1C']);