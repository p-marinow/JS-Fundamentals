function solve(firstNumber,secondNumber, thirdNumber) {
    
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    thirdNumber = Number(thirdNumber);

    
    if ( firstNumber > secondNumber && firstNumber > thirdNumber ) {
        console.log(firstNumber);
    } else if ( secondNumber > firstNumber && secondNumber > thirdNumber ){
        console.log(secondNumber);
    } else {
        console.log(thirdNumber);
    }
}

solve(1, 3, 3);