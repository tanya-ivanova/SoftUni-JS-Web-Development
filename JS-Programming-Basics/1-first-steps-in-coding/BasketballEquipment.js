function calculateBasketballExpenses(input) {
    let annualFee = Number(input[0]);

    let basketballShoes = annualFee * 0.60;
    let basketballCloths  = basketballShoes * 0.80;
    let basketballBall = basketballCloths / 4;
    let basketballAccessories = basketballBall / 5;
    
    let sumNeeded = basketballShoes + basketballCloths + basketballBall + basketballAccessories + annualFee;
    console.log(sumNeeded);
}

calculateBasketballExpenses(["365"]
)