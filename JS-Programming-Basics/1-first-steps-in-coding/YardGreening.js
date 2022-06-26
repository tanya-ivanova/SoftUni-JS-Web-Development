function calculateGreeningPrice(input) {
    let yardSquareMeters = Number(input[0]).toFixed(2);
    let priceWithoutDiscount = (yardSquareMeters * 7.61);
    let discount = (priceWithoutDiscount * 0.18);
    let finalPrice = priceWithoutDiscount - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

calculateGreeningPrice(["550"]);