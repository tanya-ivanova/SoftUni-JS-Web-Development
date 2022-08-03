function solution(recipe, quantity) {
    let microelements = {
        protein: 0,
        carbohydrate: 50,
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
    console.log(microelements.protein);
    
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

console.log(solution('lemonade', 4));