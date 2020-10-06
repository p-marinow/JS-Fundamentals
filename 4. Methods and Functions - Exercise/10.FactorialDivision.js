function factorial (firstFactorial, secondFactorial) {
    let firstSum = 1;
    let secondSum = 1;

    for ( let i = 1; i <= firstFactorial; i++ ){
        firstSum *= i;
    }

    for ( let i = 1; i <= secondFactorial; i++ ){
        secondSum *= i;
    }

    let total = firstSum / secondSum;

    console.log(`${total.toFixed(2)}`);
}

factorial(6, 2)