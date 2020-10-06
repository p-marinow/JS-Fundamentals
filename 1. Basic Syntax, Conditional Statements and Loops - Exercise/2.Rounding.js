function rounding (numRound, precision) {

    precision = Number(precision);
    numRound = Number(numRound);



    if (precision > 15){
        let number = numRound.toFixed(15);
         console.log(`${parseFloat(number)}`);
    } else {
        let number = numRound.toFixed(precision);
        console.log(`${parseFloat(number)}`);
    }

}

rounding("10.588532", "15");