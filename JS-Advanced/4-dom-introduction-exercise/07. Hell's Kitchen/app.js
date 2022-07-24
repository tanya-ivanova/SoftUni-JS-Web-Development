function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   

   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      //let input = '["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]';
            
      let divBestRestaurant = document.querySelector('#bestRestaurant p');
      let divWorkers = document.querySelector('#workers p');      
      
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
            
            avrSalary = salaries.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / salaries.length;
            
            restaurants[restaurant].avrSalary = avrSalary;
            restaurants[restaurant].bestSalary = bestSalary;
        }
    }

    let sortedRestaurants = Object.entries(restaurants)
        .sort((a, b) => b[1].avrSalary - a[1].avrSalary);
    
    let bestRestaurant = sortedRestaurants[0];

    divBestRestaurant.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avrSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;
    
    divWorkers.textContent = Object.entries(bestRestaurant[1].workers)
        .sort((a, b) => b[1] - a[1])
        .map(w => `Name: ${w[0]} With Salary: ${w[1]}`)
        .join(' ');
      
   }
}