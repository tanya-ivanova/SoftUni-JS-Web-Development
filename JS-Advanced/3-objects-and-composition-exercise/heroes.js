function solve () {
    return {
        fighter: (nameFighter) => {
            let fighterObj = {};
            fighterObj.name = nameFighter;
            fighterObj.health = 100;
            fighterObj.stamina = 100;

            fighterObj.fight = () => {
                fighterObj.stamina--;
                console.log(`${fighterObj.name} slashes at the foe!`);
            }

            return fighterObj;
        },
        mage: (nameMage) => {
            let mageObj = {};
            mageObj.name = nameMage;
            mageObj.health = 100;
            mageObj.mana = 100;

            mageObj.cast = (spell) => {
                mageObj.mana--;
                console.log(`${mageObj.name} cast ${spell}`);
            }

            return mageObj;
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);