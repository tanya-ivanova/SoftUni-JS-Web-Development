function heroicInventory (input) {
    let heroes = [];

    input.forEach(element => {
        let [name, level, items] = element.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        
        let hero = {
            name,
            level,
            items
        };        

        
        heroes.push(hero);
    });

    let heroesAsJSON = JSON.stringify(heroes);
    return heroesAsJSON;
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));