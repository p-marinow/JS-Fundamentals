function func(firstNumber, secondNumber, thirdNumber) {
    let first = Number(firstNumber);
    let second = Number(secondNumber);
    let third = Number(thirdNumber);
    let total = 0;

    function sum () {
        total = first + second;
        return total;
    }
    
    function subtract () {
        total -= third;
        console.log(total);
    }
   
    sum()
    subtract()
}

func(23, 6, 10)