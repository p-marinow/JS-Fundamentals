function result (firstNumber, secondNumber, thirdNumber) {
    if ( firstNumber >= 0 && secondNumber >= 0 && thirdNumber >= 0){
        console.log('Positive');
    } else if (firstNumber >= 0 && secondNumber >= 0 && thirdNumber < 0) {
        console.log('Negative');
    } else if (firstNumber >= 0 && thirdNumber >= 0 && secondNumber < 0) {
        console.log('Negative');
    } else if (secondNumber >= 0 && thirdNumber >= 0 && firstNumber < 0) {
        console.log('Negative');
    } else if (secondNumber < 0 && thirdNumber < 0 && firstNumber < 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}

result(1, 1, 1)
result(1, 1, -4)
result(1, -2, 3)
result(-1, 3, 4)
result(-1, -2, -3)
result(-1, -2, 3)
result(1, -2, -3)
result(-1, 2, -3)

//87pts