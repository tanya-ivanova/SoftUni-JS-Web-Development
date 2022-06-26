function travelTime(input) {
    let destinations = {};

    for (let line of input) {
        let [country, city, price] = line.split(" > ");
        price = Number(price);
        
        if(!destinations.hasOwnProperty(country)) {
            destinations[country] = {
                [city]: price
            }
        } else {
            if(!destinations[country].hasOwnProperty(city)) {
                destinations[country][city] = price;
            } else {
                if (destinations[country][city] > price) {
                    destinations[country][city] = price;
                }
            }
        }        
    }
    let destinationsArr = Object.entries(destinations);
    destinationsArr.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let entry of destinationsArr) {
        let output = "";
        let citiesArr = Object.entries(entry[1]);
        citiesArr.sort((a, b) => a[1] - b[1]);
        output += entry[0] + " -> ";
        for (let city of citiesArr) {
            output+= city[0] + " -> " + city[1] + " ";
        }
        console.log(output);
    }
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]);