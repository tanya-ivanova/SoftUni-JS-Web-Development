function sumAndProduct(input) {
    let n = Number(input[0]);
    let isNumberFound = false;

    for(let a = 1; a <= 9; a++) {
        for(let b = 9; b >= a; b--) {
            for(let c = 0; c <= 9; c++) {
                for(let d = 9; d >= c; d--) {

                    if(((a + b + c + d) === (a * b * c * d)) && (n % 10) === 5) {
                        let finalNumber = a * 1000 + b * 100 + c * 10 + d;
                        console.log(finalNumber);
                        isNumberFound = true;
                        break;
                    } 
                    
                    if((Math.floor((a * b * c * d) / (a + b + c + d)) === 3) && (n % 3 === 0)) {
                        let finalNumber = d * 1000 + c * 100 + b * 10 + a;
                        console.log(finalNumber);
                        isNumberFound = true;
                        break;
                    }
                }

                if(isNumberFound) {
                    break;
                }
            }

            if(isNumberFound) {
                break;
            }
        }

        if(isNumberFound) {
            break;
        }
    }

    if(!isNumberFound) {
        console.log('Nothing found');
    }
}

sumAndProduct(["214"]);
