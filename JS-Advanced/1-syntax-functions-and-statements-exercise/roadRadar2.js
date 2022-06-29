function roadRadar2(speed, area) {
    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let limit = limits[area];

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let statusOfDriving = findStatus(limit, speed);
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${statusOfDriving}`);
    }    

    function findStatus (limit, speed) {
        let difference = speed - limit;
        let status = '';

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        return status;
    }
}

roadRadar2(40, 'city');
roadRadar2(21, 'residential');
roadRadar2(120, 'interstate');
roadRadar2(200, 'motorway');