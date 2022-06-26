function buildWall (arr) {
    arr = arr.map(Number);
    let concreteEachDay = [];

    //while (arr.indexOf(30) !== -1) {
        //let index = arr.indexOf(30);
        //arr.splice(index, 1);
    //}

    //let filteredArr = arr.filter(x => x !== 30);
    //arr = filteredArr;
    const filtering2 = (arr) => arr.filter(x => x !== 30);

    arr = filtering2(arr);

    while(arr.length !== 0) {
        let tempArr = [];         

        for (let i = 0; i < arr.length; i++) {
            tempArr.push(arr[i] + 1);         
        }

        let concrete = 195 * arr.length;
        concreteEachDay.push(concrete);

        arr = tempArr;

        while (arr.indexOf(30) !== -1) {
            let index = arr.indexOf(30);
            arr.splice(index, 1);
        }    
                  
    }
    let sum = 0;
       
    for (let element of concreteEachDay) {
            sum +=element;
    }

    let price = sum * 1900;

    console.log(concreteEachDay.join(", "));
    console.log(`${price} pesos`);

    function filtering (arr) {
        //let filteredArr = arr.filter(x => x !== 30);
        //arr = filteredArr;
        //return arr;
        return arr.filter(x => x !== 30);
    }

    
}

buildWall([21, 25, 28, 30, 30]);
