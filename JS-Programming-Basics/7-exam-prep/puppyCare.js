function solve(input) {
    let foodInKilograms = Number(input.shift());
    let foodInGrams = foodInKilograms * 1000;

    while(input[0] !== 'Adopted') {
        let foodEatenPerDay = Number(input.shift());
        foodInGrams -= foodEatenPerDay;
    }

    if(foodInGrams >= 0) {
        console.log(`Food is enough! Leftovers: ${foodInGrams} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(foodInGrams)} grams more.`);
    }
}

solve(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"]);
