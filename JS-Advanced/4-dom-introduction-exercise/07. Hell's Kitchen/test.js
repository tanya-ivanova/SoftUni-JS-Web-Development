function solve () {
    let input = '["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]';
    //   input = input.split("[").filter(x => x !== '');
    //   input = input[0].split("]").filter(x => x !== '');
      input = input.split('"').filter(x => x !== '[' && x !== ']' && x !== ',');

      console.log(input);
    
    let restaurants = {};

    while(input[0] !== undefined) {
        let [restaurant, tokkens] = input.shift().split(' - ');
        let workers = {};
        tokkens = tokkens.split(', ');
        let sumSalary = 0;
        let bestSalary = 0;
        let counter = 0;

        for (let tokken of tokkens) {
            let [name, salary] = tokken.split(' ');
            salary = Number(salary);
            workers[name] = salary;

            counter++;
            sumSalary += salary;

            if (salary > bestSalary) {
                bestSalary = salary;
            }            
        }

        let avrSalary = sumSalary / counter;       
        
        
        if (!restaurants.hasOwnProperty(restaurant)) {
            restaurants[restaurant] = {
                workers,
                avrSalary,
                bestSalary
            };
        } else {
            let newWorkers = {
                ...restaurants[restaurant].workers,
                ...workers
            }
            restaurants[restaurant].workers = newWorkers;

            let salaries = Object.values(newWorkers);
            bestSalary = Math.max(...salaries);
            //console.log(bestSalary);
            avrSalary = salaries.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / salaries.length;
            //console.log(avrSalary);
            restaurants[restaurant].avrSalary = avrSalary;
            restaurants[restaurant].bestSalary = bestSalary;
        }
    }

    let sortedRestaurants = Object.entries(restaurants)
        .sort((a, b) => b[1].avrSalary - a[1].avrSalary);
    
    let bestRestaurant = sortedRestaurants[0];

    console.log(`Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avrSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`);
    
    Object.entries(bestRestaurant[1].workers)
        .sort((a, b) => b[1] - a[1])
        .map(w => console.log(`Name: ${w[0]} With Salary: ${w[1]}`));
}

solve();
