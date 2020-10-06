function sumFirstLast(input) {
    let firstElement = Number(input[0]);
    let currentElement = 0;

    for ( let i = 0; i < input.length; i++ ){
        currentElement = 0;
        currentElement += Number(input[i]);
    }

    console.log(`${firstElement + currentElement}`);
}

sumFirstLast(['20', '30', '40'])