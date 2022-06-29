function roadRadar(speed, area) {
    let motorwaySpeedLimit = 130;
    let interstateSpeedLimit = 90;
    let citySpeedLimit = 50;
    let residentionalSpeedLimit = 20;

    if (area === 'motorway') {
        if (speed <= motorwaySpeedLimit) {
            console.log(`Driving ${speed} km/h in a ${motorwaySpeedLimit} zone`);
        } else {
            let statusOfDriving = findStatus(motorwaySpeedLimit, speed);
            console.log(`The speed is ${speed - motorwaySpeedLimit} km/h faster than the allowed speed of ${motorwaySpeedLimit} - ${statusOfDriving}`);
        }
    } else if (area === 'interstate') {
        if (speed <= interstateSpeedLimit) {
            console.log(`Driving ${speed} km/h in a ${interstateSpeedLimit} zone`);
        } else {
            let statusOfDriving = findStatus(interstateSpeedLimit, speed);
            console.log(`The speed is ${speed - interstateSpeedLimit} km/h faster than the allowed speed of ${interstateSpeedLimit} - ${statusOfDriving}`);
        }
    } else if (area === 'city') {
        if (speed <= citySpeedLimit) {
            console.log(`Driving ${speed} km/h in a ${citySpeedLimit} zone`);
        } else {
            let statusOfDriving = findStatus(citySpeedLimit, speed);
            console.log(`The speed is ${speed - citySpeedLimit} km/h faster than the allowed speed of ${citySpeedLimit} - ${statusOfDriving}`);
        }
    } else if (area === 'residential') {
        if (speed <= residentionalSpeedLimit) {
            console.log(`Driving ${speed} km/h in a ${residentionalSpeedLimit} zone`);
        } else {
            let statusOfDriving = findStatus(residentionalSpeedLimit, speed);
            console.log(`The speed is ${speed - residentionalSpeedLimit} km/h faster than the allowed speed of ${residentionalSpeedLimit} - ${statusOfDriving}`);
        }
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

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');