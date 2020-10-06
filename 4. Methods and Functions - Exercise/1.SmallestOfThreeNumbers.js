function smallestNumb(firstNumber, secondNumber, thirdNumber){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    thirdNumber = Number(thirdNumber);

    if (firstNumber < secondNumber && firstNumber < thirdNumber){
        console.log(firstNumber);
    } else if (secondNumber < firstNumber && secondNumber < thirdNumber){
        console.log(secondNumber);
    } else if (thirdNumber < firstNumber && thirdNumber < secondNumber){
        console.log(thirdNumber);
    }
}

smallestNumb(2, 5, 3)

//90pts