function buildWall2 (arr) {
    arr = arr.map(Number);
    let concreteEachDay = [];

    removeCompletedWall();

    while(arr.length !== 0) {
        let tempArr = createTempArr();

        calculateConcrete();

        arr = tempArr;

        removeCompletedWall();           
    }
    
    let sum = sumArr(concreteEachDay);

    let price = calculatePrice(sum);

    console.log(concreteEachDay.join(", "));
    console.log(`${price} pesos`);

    function removeCompletedWall() {
        while (arr.indexOf(30) !== -1) {
            let index = arr.indexOf(30);
            arr.splice(index, 1);
        }
    }

    function sumArr(arr) {
        let sum = 0;
       
        for (let element of concreteEachDay) {
            sum +=element;
        }
        return sum;
    }

    function createTempArr() {
        let tempArr = [];         

        for (let i = 0; i < arr.length; i++) {
            tempArr.push(arr[i] + 1);         
        }
        return tempArr;
    }

    function calculateConcrete() {
        let concrete = 195 * arr.length;
        concreteEachDay.push(concrete);
    }

    function calculatePrice(sum) {
        return sum * 1900;
    }
}


buildWall2 ([21, 25, 28, 30, 30]);