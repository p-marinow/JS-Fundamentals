function sum (input) {

    let sum = 0;

    while (input > 0) {
        sum += input % 10;
        input = parseInt(input / 10);
    }

    console.log(sum);
}


sum(543);
