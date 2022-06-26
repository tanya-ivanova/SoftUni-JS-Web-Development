function inventory (input) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }
    let arrOfHeroes = [];

    while (input.length !== 0) {
        let tokens = input.shift().split(" / ");
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2];
        
        let objHero = new Hero(name, level, items);
        arrOfHeroes.push(objHero);
    }
    arrOfHeroes.sort((a, b) => a.level - b.level);
    arrOfHeroes.forEach(x => {
        console.log(`Hero: ${x.name}`);
        console.log(`level => ${x.level}`);
        console.log(`items => ${x.items}`);
    });
}

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);