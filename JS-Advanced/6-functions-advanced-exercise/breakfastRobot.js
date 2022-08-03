function solution() {
    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour:3
        },
        eggs: {
            protein: 5, 
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10, 
            carbohydrate: 10, 
            fat: 10,
            flavour: 10
        }
    }

    let commands = {
        restock,
        prepare,
        report
    }

    return managerFunction;

    function managerFunction(input) {
        let [command, ...params] = input.split(' ');
        let output = commands[command](...params);
        return output;        
    }

    function restock(microelement, quantity) {
        quantity = Number(quantity);
        microelements[microelement] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        quantity = Number(quantity);
        let recipeIngredients = Object.entries(recipes[recipe]);
        let isSuccess = true;
        
        for (let item of recipeIngredients) {
            let ingredient = item[0];
            let necessaryQuantity = item[1] * quantity;
                    
            if(microelements[ingredient] >= necessaryQuantity) {
                microelements[ingredient] -= necessaryQuantity;            
            } else {
                isSuccess = false;
                return `Error: not enough ${ingredient} in stock`
            }        
        }
        if(isSuccess) {
            return 'Success';
        }
    }

    function report() {
        return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
    }
}

let manager = solution ();
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));