function cookingByNumbers (number, operation1, operation2, operation3, operation4, operation5) {
    number = Number(number);

    let operations = {
        chop,
        dice,
        spice, 
        bake, 
        fillet
    }

    let commands = [operation1, operation2, operation3, operation4, operation5];

    for (let command of commands) {
        number = operations[command](number);
        console.log(number);
    }
    
    function chop (number) {
        return number / 2;
    }

    function dice(number) {
        return Math.sqrt(number);
    } 

    function spice(number) {
        return number + 1;
    }

    function bake(number) {
        return number * 3;
    }

    function fillet (number) {
        return number * 0.8;
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');