function pointsValidation2 (input) {
    const [x1, y1, x2, y2] = input;
    
    function distancePoint1ToCoordinateSystem (x1, y1) {
        return Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
    }

    function distancePoint2ToCoordinateSystem (x2, y2) {
        return Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
    }

    function distanceBetweenPoints (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }       
    
    function isPoint1Valid (x1, y1) {
        let point1ToCS = distancePoint1ToCoordinateSystem(x1, y1);
        return point1ToCS % 1 === 0;
    }

    function isPoint2Valid (x2, y2) {
        let point2ToCS = distancePoint2ToCoordinateSystem(x2, y2);
        return point2ToCS % 1 === 0;
    }

    function isDistTwoPointsValid (x1, y1, x2, y2) {
        let distTwoPoints = distanceBetweenPoints(x1, y1, x2, y2);
        return distTwoPoints % 1 === 0;
    }

    function printValid (x1, y1, x2, y2) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }

    function printInvalid (x1, y1, x2, y2) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    if (isPoint1Valid(x1, y1)) {
        printValid(x1, y1, 0, 0);
    } else {
        printInvalid(x1, y1, 0, 0);
    }

    if(isPoint2Valid(x2, y2)) {
        printValid(x2, y2, 0, 0);
    } else {
        printInvalid(x2, y2, 0, 0);
    }

    if(isDistTwoPointsValid(x1, y1, x2, y2)) {
        printValid(x1, y1, x2, y2);
    } else {
        printInvalid(x1, y1, x2, y2);
    }
}

pointsValidation2([2, 1, 1, 1]);