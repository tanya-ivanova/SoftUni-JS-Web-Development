function plantDiscovery (input) {
    let numberOfPlants = input.shift();
    let plants = {};

    for (let i = 0; i < numberOfPlants; i++) {
        let [name, rarity] = input.shift().split("<->");
        rarity = Number(rarity);
        plants[name] = {
            rarity,
            ratings: []
        };
    }
    
    while(input[0] !== "Exhibition") {
        let tokens = input.shift().split(": ");
        let command = tokens[0];
        let [name, p1] = tokens[1].split(" - ");
        p1 = Number(p1);
        
        if (command === "Rate") {
            if (plants.hasOwnProperty(name)) {                
                plants[name].ratings.push(p1);                
            } else {
                console.log("error");
            }
        } else if (command === "Update") {
            if (plants.hasOwnProperty(name)) {                
                plants[name].rarity = p1;
            } else {
                console.log("error");
            }
        } else if (command === "Reset") {
            if (plants.hasOwnProperty(name)) {
                plants[name].ratings = [];
            } else {
                console.log("error");
            }
        }
    }
    console.log("Plants for the exhibition:"); 

    for (let plant of Object.entries(plants)) {
        let ratings = plant[1].ratings;        
        let averageRating = calculateAverageRating(ratings);
        console.log(`- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

    function calculateAverageRating (ratings) {
        let sum = 0;
        let averageRating = 0;
        for (let rating of ratings) {
            sum += rating;
        }
        if (ratings.length !== 0) {
            averageRating = sum / ratings.length;
        }
        return averageRating;
    }
}

plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]);