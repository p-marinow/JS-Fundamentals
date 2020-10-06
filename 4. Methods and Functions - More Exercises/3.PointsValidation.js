function validation(arrayOfCoordinates) {
    let x1 = arrayOfCoordinates[0];
    let x2 = arrayOfCoordinates[1];
    let y1 = arrayOfCoordinates[2];
    let y2 = arrayOfCoordinates[3];
    let flag = '';

    let validationFirst = () => {
        let firstLocation = Math.pow((0 - x1), 2);
        let secondLocation = Math.pow((0 - y1), 2);
        let finalLocation = Math.sqrt(firstLocation + secondLocation);

        if (finalLocation == parseInt(finalLocation)) {
            flag = 'valid';
            console.log(`{${x1}, ${y1}} to {0, 0} is ${flag}`);
        } else {
            flag = 'invalid';
            console.log(`{${x1}, ${y1}} to {0, 0} is ${flag}`);
        }

    }

    validationFirst();

    let validationSecond = () => {
        let firstLocation = Math.pow((x2 - 0), 2);
        let secondLocation = Math.pow((y2 - 0), 2);
        let finalLocation = Math.sqrt(firstLocation + secondLocation);

        if (finalLocation == parseInt(finalLocation)) {
            flag = 'valid';
            console.log(`{${x2}, ${y2}} to {0, 0} is ${flag}`);
        } else {
            flag = 'invalid';
            console.log(`{${x2}, ${y2}} to {0, 0} is ${flag}`);
        }

    }

    validationSecond();

    let validationBetween = () => {
        let firstLocation = Math.pow((x2 - x1), 2);
        let secondLocation = Math.pow((y2 - y1), 2);
        let finalLocation = Math.sqrt(firstLocation + secondLocation);

        if (finalLocation == parseInt(finalLocation)) {
            flag = 'valid';
            console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is ${flag}`);
        } else {
            flag = 'invalid';
            console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is ${flag}`);
        }
    }

    validationBetween();
}

validation([2, 1, 1, 1])