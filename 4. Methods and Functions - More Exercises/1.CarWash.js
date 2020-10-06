function washingCar(array) {
    let value = 0;

    for ( let i = 0; i < array.length; i++ ) {

        switch(array[i]){
            case "soap":
                value += 10;    break;
            case "water":
                value *= 1.2;    break;
            case "vacuum cleaner":
                value *= 1.25;    break;
            case "mud":
                value *= 0.9;    break;
        }
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

washingCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])