function perfectNumber(number) {
    let counter = 0;
    let sum = 0;
    let arr = [];

    for ( let i = 0; i < number; i++ ) {
        if ( number % i == 0 ){
            counter++
            sum += i;
            arr.push(i);
        }
        // console.log(i);
        // console.log(counter);
    }

    if ( number == sum ) {
        console.log('We have a perfect number!');
        //arr.toString;
        //let newArr = arr.slice();
        //newArr.join(' + ');
        console.log(`${arr.slice().join(' + ')}`);
    } else {
        console.log('It\'s not so perfect.');
    }    
}

perfectNumber(6)