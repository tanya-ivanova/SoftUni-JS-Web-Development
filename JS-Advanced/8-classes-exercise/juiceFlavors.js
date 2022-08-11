function solve(input) {
    let juicesAll = new Map();
    let juicesBottles = new Map();

    for(let item of input) {
        let [juice, quantity] = item.split(' => ');
        quantity = Number(quantity);

        if(!juicesAll.has(juice)) {
            juicesAll.set(juice, quantity);
        } else {
            juicesAll.set(juice, juicesAll.get(juice) + quantity);
        }

        if(juicesAll.get(juice) >= 1000) {            
            juicesBottles.set(juice, juicesAll.get(juice));
            
        }
    }

    for(let [key, value] of juicesBottles) {
        console.log(`${key} => ${Math.floor(value / 1000)}`);
    }    
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);
